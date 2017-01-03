(ns om-cards.ds
  (:require [datascript.core :as d]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om.util :as util]))

(def conn (d/create-conn {:faqs {:db/cardinality :db.cardinality/many
                                 :db/valueType :db.type/ref}
                          :id {:db/unique :db.unique/identity}
                          :app/user {:db/cardinality :db.cardinality/one
                                     :db/valueType :db.type/ref}
                          :db/ident {:db/unique :db.unique/identity}}))
(d/transact! conn
             [{:db/ident :remote/user
               :faqs [{:id 1 :question "What"}]}
              {:db/ident :foo
               :app/msg "Hello"
               :app/user [:db/ident :remote/user]}
              ])

(def app-state (atom {:conn conn}))

(defn read [{:keys [query ast state target] :as env} key params]
  (let [k (:key ast)
        conn (:conn @state)
        db (d/db conn)]
    (println "ast: " ast)
    (if (util/ident? k)
      {:value (d/pull-many db '[*] '([:db/ident :foo] [:db/ident :remote/user]))}
      #_ {:value (d/q '[:find (pull ?e ?selector) .
                     :in $ ?selector ?k
                     :where [?e :db/ident ?k]]
                   db query (se () cond k))})))

(def reconciler (om/reconciler
                  {:state app-state
                   :parser (om/parser {:read read})}))

(defui AppRoot
  static om/IQuery
  (query [this]
    [{[:db/ident :foo] [:app/msg
                        {:app/user [{:faqs [:id :question]}]}]}])
  Object
  (render [this]
    (dom/p nil (str (om/props this)))))
