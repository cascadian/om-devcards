(ns om-cards.tree
  (:require [datascript.core :as d]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om.util :as util]
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
             :father         {:db/cardinality :db.cardinality/one
                              :db/valueType   :db.type/ref}
             :mother         {:db/cardinality :db.cardinality/one
                              :db/valueType :db.type/ref}
             :faqs           {:db/cardinality :db.cardinality/many
                              :db/valueType   :db.type/ref}
             :pages          {:db/cardinality :db.cardinality/many
                              :db/valueType   :db.type/ref}
             :id             {:db/unique :db.unique/identity}
             :person/id             {:db/unique :db.unique/identity}
             :app/user       {:db/cardinality :db.cardinality/one
                              :db/valueType   :db.type/ref}
             :app/person       {:db/cardinality :db.cardinality/one
                              :db/valueType   :db.type/ref}
             :db/ident       {:db/unique :db.unique/identity}
             :remote/key     {:db/unique :db.unique/identity}})
(def conn (d/create-conn schema))
(d/transact! conn
             [{:remote/target :remote}
              {:remote/target :static}

              {:remote/key       :remote/viewer
               :remote/query   (om/get-query Viewer)
               :remote/status  :remote.status/none
               :remote/targets [[:remote/target :remote]]}
              {:db/ident       :remote/config
               :remote/status  :remote.status/none
               :remote/targets [[:remote/target :remote]]}
              {:db/ident :foo
               :app/msg  "Hello"
               :app/user [:remote/key :remote/viewer]
               :app/person {:person/id 1
                            :person/name "Me"
                            :father {:person/id 2
                                     :person/name "Dad"}
                            :mother {:person/id 3
                                     :person/name "Mom"}}}
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
  (read-value (assoc env :conn (:conn @state) :db (d/db conn)) key params))

(defmethod read-value :person/id
  [{:keys [conn query ast target]} key params]
  (let [{:keys [key]} ast
        _ (println "reading..." key)
        [_ v] key
        q '[:find (pull ?e ?selector) .
            :in $ ?selector ?k
            :where [?e :person/id ?k]]
        {:keys [remote/status remote/targets] remote-query :remote/query :as value} (d/q q (d/db conn) query v)
        filtered-targets (filter #(= target (:remote/target %)) targets)]
    (if target
      (when (and (= :remote.status/none status) (first filtered-targets))
        (println "target: " target)
        (println "remote status: " status)
        (let [ast* (om/query->ast [{key remote-query}])
              ast* (get-in ast* [:children 0])]
          {target ast*}))
      {:value value})))

(defmethod read-value :remote/key
  [{:keys [conn query ast target]} key params]

  (let [{:keys [key]} ast
        _ (println "reading..." key)
        [_ v] key
        q '[:find (pull ?e ?selector) .
            :in $ ?selector ?k
            :where [?e :remote/key ?k]]
        {:keys [remote/status remote/targets] remote-query :remote/query :as value} (d/q q (d/db conn) query v)
        filtered-targets (filter #(= target (:remote/target %)) targets)]
    (if target
      (when (and (= :remote.status/none status) (first filtered-targets))
        (println "target: " target)
        (println "remote status: " status)
        (let [ast* (om/query->ast [{key remote-query}])
              ast* (get-in ast* [:children 0])]
          {target ast*}))
      {:value value})))

(defmethod read-value :remote/config
  [env key params])

(defmethod read-value :foo
  [{:keys [db target query]} key params]
  (if-not target
    {:value (find-by-lookup-ref db [:db/ident key] query)}))

(def server-conn (d/create-conn schema))
(d/transact! server-conn
             [{:person/id 1
               :person/name "Me"
               :father {:person/id 2
                        :person/name "Dad"
                        :father {:person/id 4
                                 :person/name "Grandpa (paternal)"}
                        :mother {:person/id 5
                                 :person/name "Grandma (paternal)"}}
               :mother {:person/id 3
                        :person/name "Mom"
                        :father {:person/id 6
                                 :person/name "Grandpa (maternal)"}
                        :mother {:person/id 7
                                 :person/name "Grandma (maternal)"}}}
              {:remote/key :remote/viewer
               :pages    [{:id 10 :url "http://facebook.com"}]
               :faqs     [{:id 1 :question "What?" :answer "A balloon"}]}])

(defn send
  [{:keys [remote] :as query-map} callback]
  (println "Sending..." query-map)
  (let [_ (pprint/pprint remote)
        db (d/db server-conn)
        ast (om/query->ast remote)
        results (mapv (fn [{:keys [key query]}]
                        (callback {key {:remote/status :remote.status/loading}})
                        {key (find-by-lookup-ref db key query)})
                      (:children ast))
        merged-results (apply merge results)]
    (js/setTimeout #(callback merged-results) 1000)))

(defn default-merge [reconciler state res query]
  (println "merging...")
  (let [conn (:conn state)]
    (doseq [[k v] res]
      (let [m (if (util/ident? k) (apply hash-map k) {:db/ident k})
            tx-data [(merge m v)]]
        (d/transact! conn tx-data)))
    (let [res
          {:keys    (into [] (remove symbol?) (keys res))
           :next    state
           :tempids (->> (filter (comp symbol? first) res)
                         (map (comp :tempids second))
                         (reduce merge {}))}]
      (pprint/pprint res)
      res)))

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

(defui Person
  static om/IQuery
  (query [this]
    '[:db/id :person/id
      :person/name
      {:father ...}
      {:mother ...}]))

(defui AppRoot
  static om/IQueryParams
  (params [this]
    (let [remote-query (om/get-query Remote)]
      {:remote remote-query
       :person (om/get-query Person)
       :viewer (into [:remote/status] (om/get-query Viewer))}))
  static om/IQuery
  (query [this]
    '[{[:person/id 1] ?person}
      {[:remote/key :remote/viewer] ?remote}
      {:remote/config ?remote}
      {:foo [:app/msg
             {:app/user ?viewer}
             {:app/person ?person}]}])
  Object

  (render [this]
    (dom/div nil
             (dom/pre nil (with-out-str (pprint/pprint (om/get-query this))))
             (dom/pre nil (with-out-str
                            (pprint/pprint (om/props this)))))))
