(ns replica.rcell
  (:require [reagent.core :as reagent]
            [replica.state :as state]
            [replica.utils :refer [$]]))

(defn rcell-comp [{:keys [id title style content]}]  
  (reagent/create-class    
    {:component-did-mount #(.dialog ($ (reagent/dom-node %)))
     :reagent-render (fn [{:keys [id title style content]}]
                       [:div.rcell {:id id :title title :style style} content])}))

(defn rcell [id & {:keys [title style content]}]
  "adds a new REPL!CA cell to the tree."
  (swap! state/rcells assoc id [rcell-comp {:id id
                                            :title (or title id) 
                                            :style style 
                                            :content content}]))
