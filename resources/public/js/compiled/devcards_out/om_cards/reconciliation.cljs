(ns om-cards.reconciliation
  (:require
    [devcards-om-next.core :refer-macros [defcard-om-next om-next-root]]
    [om.next :as om :refer-macros [defui ui]]
    [om.dom :as dom]
    #_[om.core :as om :include-macros true]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(def parser
  (let [p (om/parser
            {:read
             (fn [{:keys [query state target] {:keys [key]} :ast :as env} _ params]
               (println "key: " key)
               (println "env: " env)
               (cond
                 target {target true}
                 :else {:value (get-in @state key "not found")}

                 ))})]
    (fn ([env query]
         (let [res (p env query)]
           (println "Parsed: " res)
           res))
      ([env query target]
       (let [res (p env query target)]
         (println "Parsed: " res)
         res)))))

(defui Home
  Object
  (render [this]
    (let [{:keys [app/home]} (om/props this)
          nav-fn (om/get-computed this :nav-fn)]
      (dom/div nil
               (dom/h1 nil home)
               (dom/button #js {:onClick #(nav-fn :about)} "About")))))

(defui About
  Object
  (render [this]
    (let [{:keys [app/about]} (om/props this)
          nav (om/get-computed this :nav-fn)]
      (dom/div nil
               (dom/h1 nil about)
               (dom/button #js {:onClick #(nav :home)} "home")))))

(defui AppRoot
  static om/IQuery
  (query [this]
    '[
      {[:db/ident :foo] [:a :b :c]}
      ])
  Object
  (initLocalState [this]
    {:nav-state {:index 0
                 :routes [{:key :home}]}
     :routes {:home  [Home '[:app/home]]
           :about [About '[:app/about]]}})
  (render [this]
    (let [props (om/props this)
          nav-map (om/get-state this :nav)
          nav-index (om/get-state this [:nav-state :index])
          nav-route (om/get-state this [:nav-state :routes nav-index])
          [ui query] (om/get-state this [:routes (:key nav-route)])
          factory (om/factory ui)
          nav-fn (fn [nav-key]
                   (let [[ui query] (om/get-state this [:routes nav-key])]
                     (om/update-state! this assoc-in [:nav-state :routes] [{:key nav-key}] )
                     (om/set-query! this {:query query})))]
      (factory (om/computed (om/props this) {:nav-fn nav-fn})))))

(def reconciler
  (om/reconciler
    {:state (atom {:app/home "Welcome Home"
                   :app/about "About us"})
     :parser parser
     :send (fn [query-map callback]
             (println "Sending: " query-map)
             (doseq [[target query] query-map]
               (callback {[:db/ident :foo] {:a 1 :b 2 :c 3}})))
     :remotes [:static]}))



