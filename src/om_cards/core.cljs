(ns om-cards.core
  (:require
    [devcards-om-next.core :refer-macros [defcard-om-next om-next-root]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [om-cards.ds :as ds]
    [om-cards.remotes :as remotes]
    [om-cards.reconciliation :as rec]
    [datascript.core :as d]
    #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defcard first-card
  (sab/html [:div
             [:h1 "This is your first devcard!"]]))

;; use ^:once meta in `defui`
(defui ^:once Counter
       Object
       (initLocalState [this]
                       {:val 1})
       (render [this]
               (let [{:keys [val]} (om/get-state this)]
                 (dom/div nil
                          (str "val: " val)
                          (dom/button
                            #js {:onClick #(om/update-state! this update :val inc)}
                            "inc!")))))

;; defonce the reconciler
(defonce counter-reconciler
         (om/reconciler {:state {}
                         :parser {:read (fn [] {:value {}})}}))

;; the usual `defcard` calls `om-next-root`
(defcard om-next-root-example
         "`om-next-root` takes a component class and (optionally)
          a map with the state or a reconciler"
         (om-next-root Counter))

;; `defcard-om-next` takes every normal `defcard` argument
;; (documentation, devcard, options, etc.), and the arguments of `om-next-root`
(defcard-om-next defcard-om-next-example
                 "`defcard-om-next` example with a Component class and a reconciler"
                 Counter
                 counter-reconciler)

(defcard-om-next
  test
  "REconciler"
  rec/AppRoot
  rec/reconciler
  )

(defcard-om-next
  ds-test
  "REconciler"
  ds/AppRoot
  ds/reconciler
  )

(defcard-om-next
  remotes-test
  "Remotes"
  remotes/AppRoot
  remotes/reconciler
  )
(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

