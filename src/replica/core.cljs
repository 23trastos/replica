(ns replica.core
  (:require [reagent.core :as reagent]
            [replica.rcell :refer [rcell-comp]]
            [replica.rklipse :refer [rklipse]]
            [replica.state :as state]
            [replica.utils :refer [$#]]))

(defn replica-tree []
  (reagent/create-class    
    {:reagent-render (fn []
                       (apply conj [:div#root] (vals @state/rcells)))}))

(defn ^:export main []
  (rklipse "repl" :title "REPL")
  (reagent/render [replica-tree] (.getElementById js/document "app")))
  ;(reagent/render [rcell-comp {:id "status" :title "STATUS" :content @state/rcells}] (.getElementById js/document "app"))
  

