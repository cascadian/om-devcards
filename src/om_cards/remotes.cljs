(ns om-cards.remotes
  (:require [datascript.core :as d]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.pprint :as pprint]
            [om.util :as util]))

(defui Viewer
  static om/IQuery
  (query [this]
    [{:faqs [:id :question :answer]}
     {:pages [:id :url]}]))

(def schema {:remote/targets {:db/valueType   :db.type/ref
                              :db/cardinality :db.cardinality/many}
             :remote/target  {:db/unique :db.unique/identity}
             :faqs           {:db/cardinality :db.cardinality/many
                              :db/valueType   :db.type/ref}
             :pages          {:db/cardinality :db.cardinality/many
                              :db/valueType   :db.type/ref}
             :id             {:db/unique :db.unique/identity}
             :app/user       {:db/cardinality :db.cardinality/one
                              :db/valueType   :db.type/ref}
             :db/ident       {:db/unique :db.unique/identity}})
(def conn (d/create-conn schema))
(d/transact! conn
             [{:remote/target :remote}
              {:remote/target :static}
              {:db/ident       :remote/viewer
               :remote/query   (om/get-query Viewer)
               :remote/status  :remote.status/none
               :remote/targets [[:remote/target :remote]]}
              {:db/ident       :remote/config
               :remote/status  :remote.status/none
               :remote/targets [[:remote/target :remote]]}
              {:db/ident :foo
               :app/msg  "Hello"
               :app/user [:db/ident :remote/viewer]}
              ])

(defn find-by-lookup-ref
  [db [attr value] selector]
  (let [q '[:find (pull ?e ?selector) .
            :in $ ?selector ?attr ?value
            :where [?e ?attr ?value]]]
    (d/q q db selector attr value)))

(defn find-all-attribute-values
  [db attr]
  (let [q '[:find [?value ...]
            :in $ ?attr
            :where [_ ?attr ?value]]]
    (d/q q db attr)))

(def app-state (atom {:conn conn}))

(defmulti read-value om/dispatch)

(defn read [{:keys [query ast state target] :as env} key params]
  (read-value (assoc env :db (d/db conn)) key params))

(defmethod read-value :remote/viewer
  [{:keys [db query ast target]} key params]
  (let [q '[:find (pull ?e ?selector) .
            :in $ ?selector ?k
            :where [?e :db/ident ?k]]
        {:keys [remote/status remote/targets] remote-query :remote/query :as value} (d/q q db query key)
        filtered-targets (filter #(= target (:remote/target %)) targets)]
    (if target
      (when (and (= :remote.status/none status) (first filtered-targets))
        (let [ast* (om/query->ast [{key remote-query}])]
          {target (get-in ast* [:children 0])}))
      {:value value})))

(defmethod read-value :remote/config
  [env key params])

(defmethod read-value :foo
  [{:keys [db target query]} key params]
  (if-not target
    {:value (find-by-lookup-ref db [:db/ident key] query)}))

(def server-conn (d/create-conn schema))
(d/transact! server-conn
             [{:db/ident :remote/viewer
               :pages    [{:id 10 :url "http://facebook.com"}]
               :faqs     [{:id 1 :question "What?" :answer "A balloon"}]}])

(defn send
  [{:keys [remote]} callback]
  (let [db (d/db server-conn)
        ast (om/query->ast remote)
        results (mapv (fn [{:keys [key query]}]
                        (js/setTimeout #(callback {key {:remote/status :remote.status/loading}}) 500)
                        {key (find-by-lookup-ref db [:db/ident key] query)})
                      (:children ast))
        merged-results (apply merge results)]
    (js/setTimeout #(callback merged-results) 1000)))

(defn default-merge [reconciler state res query]
  (let [conn (:conn state)]
    (doseq [[k v] res]
      (let [tx-data [(merge {:db/ident k} v)]]
        (d/transact! conn tx-data)))
    (pprint/pprint @conn)
    {:keys    (into [] (remove symbol?) (keys res))
     :next    state
     :tempids (->> (filter (comp symbol? first) res)
                   (map (comp :tempids second))
                   (reduce merge {}))}))

(def reconciler (om/reconciler
                  {:state  app-state
                   :send   send
                   :merge  default-merge
                   :remote (find-all-attribute-values (d/db conn) :remote/target)
                   :parser (om/parser {:read read})}))

(defui Remote
  static om/IQuery
  (query [this]
    [:remote/status :remote/query {:remote/targets [:remote/target]}]))

(defui AppRoot
  static om/IQueryParams
  (params [this]
    (let [remote-query (om/get-query Remote)]
      {:remote remote-query
       :viewer (into [:remote/status] (om/get-query Viewer))}))
  static om/IQuery
  (query [this]
    '[{:remote/viewer ?remote}
      {:remote/config ?remote}
      {:foo [:app/msg
             {:app/user ?viewer}]}])
  Object
  (render [this]
    (dom/pre nil (with-out-str
                   (pprint/pprint (om/props this))))))
