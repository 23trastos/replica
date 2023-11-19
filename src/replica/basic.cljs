(ns replica.basic
  (:require [reagent.core :refer [create-class]]
            [reagent.dom :refer [dom-node]]
            [replica.state :refer [rstate]]
            [klipse.run.plugin.plugin] ;; this namespace initializes Klipse. We require it for its side effects
            [klipse.plugin :as klipse]))

(defn rcell-comp [{:keys [id title style jq-settings]} & extra]  
  (create-class
    {:component-did-mount #(swap! rstate assoc-in [:dialogs id] (.dialog (js/$ (dom-node %)) (clj->js jq-settings)))
     :reagent-render (fn [{:keys [id title style]} & extra]
                       (into [:div.rcell {:id id :title title :style style}] extra))}))

(defn rcell [{:keys [id title style jq-settings]} & extra]
  (swap! rstate assoc-in [:rcells id] (into [rcell-comp {:id id
                                                         :title (or title id)
                                                         :style style
                                                         :jq-settings jq-settings}] extra)))

(defonce default-settings {:selector ".cljs"
                           :selector_eval_js ".js"
                           :selector_eval_markdown ".md"
                           :selector_eval_html ".html"
                           :editor_type "code-mirror"
                           :eval_idle_msec 9999999})

(defn rklipse [{:keys [id lang snippet from-gist settings]} & extra]
  (create-class
   {:component-did-mount (fn [_]
                           (klipse/init (clj->js (merge default-settings settings)))
                           (when from-gist (js/loadGist (:id from-gist) (:file from-gist) (clj->js id))))
    :reagent-render      (fn [{:keys [id lang snippet]} & extra]
                           (into [:div.rklipse {:id (str id "-klipse")}
                                  [:div {:class ["klipse" lang]}
                                   snippet]] extra))}))
