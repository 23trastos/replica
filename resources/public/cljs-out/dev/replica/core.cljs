(ns replica.core
  (:require [reagent.core :as reagent]
            [replica.basic :refer [rcell rklipse]]
            [replica.state :refer [rstate]]))

(defn ui []
  (reagent/create-class    
    {:reagent-render (fn []
                       (into [:div#ui] (vals (:rcells @rstate))))}))

(defn ^:export main []
  
  (rcell {:id "start"
          :title "loading..."
          :jq-settings {:dialogClass "no-close"
                        :resizable false
                        :position {:my "top"
                                   :at "top"
                                   :of "#ui"}}}
         [rklipse {:id "start" :lang "cljs"
                   :from-gist {:id "2d91640fe384130116e26ad135619b77"
                               :file "basic.cljs"}
                   :settings {:eval_idle_msec 0}}])

  (reagent/render [ui] (.getElementById js/document "app")))  

