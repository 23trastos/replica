(ns replica.rklipse
  ;(:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent]
            [klipse.run.plugin.plugin] ;; this namespace initializes Klipse. We require it for its side effects
            [klipse.plugin :as klipse]
            ;[cljs.core.async :refer [<!]]
            [replica.state :as state]
            [replica.rcell :refer [rcell]]))

(defonce default-settings {:selector ".cljs"
                           :selector_eval_js ".js"
                           :selector_eval_markdown ".md"
                           :selector_eval_html ".html"
                           :editor_type "code-mirror"})

(defn rklipse-comp [{:keys [id lang snippet from-gist settings]}]  
  (reagent/create-class    
    {:component-did-mount (fn [_]
                            (klipse/init (clj->js (merge default-settings settings)))                                                         
                            (when from-gist) (js/loadGist (:id from-gist) (:file from-gist) id))   
     :reagent-render      (fn [{:keys [lang snippet]}]
                            [:div.rklipse
                             [:div {:class ["klipse" lang]}
                              snippet]])}))

(defn rklipse [id & {:keys [title style lang snippet from-gist settings] :or {lang "cljs"}}]
  (rcell id :title title :style style :content [rklipse-comp {:id id 
                                                              :lang lang 
                                                              :snippet snippet
                                                              :from-gist from-gist
                                                              :settings settings}]))
