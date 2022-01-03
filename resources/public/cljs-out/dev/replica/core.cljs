(ns replica.core
  (:require [reagent.core :as reagent]
            [replica.basic :refer [rklipse]]
            [replica.state :refer [rstate]]))

(defn ui []
  (reagent/create-class    
    {:reagent-render (fn []
                       (apply conj [:div#ui] (vals (:rcells @rstate))))}))

(defn ^:export main []
  (rklipse "start"
           :title "(ns replica.user.basic)"
           :snippet "(js/loadGist 
                     \"a1d56b4533907915abf3647285e257b4\"
                     \"basic.cljs\" 
                     \"start\")"
           :klipse-settings {:eval_idle_msec 0}
           :jq-settings {:height 20})
  (reagent/render [ui] (.getElementById js/document "app")))  

