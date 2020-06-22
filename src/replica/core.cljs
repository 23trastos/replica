(ns replica.core
  (:require [reagent.core :as reagent]
            [replica.rcell :refer [rcell-comp]]
            [replica.rklipse :refer [rklipse]]
            [replica.state :as state]
            [replica.utils :refer [$#]]))

(defn replica-tree []
  (reagent/create-class    
    {:reagent-render (fn []
                       (apply conj 
                         [:div#root] 
                         (map (partial conj [rcell-comp]) (vals @state/rcells))))}))
(defn ^:export main []
  (rklipse "repl" :title "REPL" :from-gist {:id "a2384d6e919f7f7ee831802780d803d4" :file "base.cljs"})
  (reagent/render [replica-tree] (.getElementById js/document "app")))
  ;(reagent/render [rcell-comp {:id "status" :title "STATUS" :content @state/rcells}] (.getElementById js/document "app"))
  

