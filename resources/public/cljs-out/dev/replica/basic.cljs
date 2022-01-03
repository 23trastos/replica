(ns replica.basic
  (:require [reagent.core :refer [create-class]]
            [reagent.dom :refer [dom-node]]
            [replica.state :refer [rstate]]
            [klipse.run.plugin.plugin] ;; this namespace initializes Klipse. We require it for its side effects
            [klipse.plugin :as klipse]))

(defn rcell-comp [{:keys [id title style content jq-settings]}]  
  (create-class
    {:component-did-mount #(swap! rstate assoc-in [:dialogs id] (.dialog (js/$ (dom-node %)) (clj->js jq-settings)))
     :reagent-render (fn [{:keys [id title style content]}]
                       [:div.rcell {:id id :title title :style style} content])}))

(defn rcell [id & {:keys [title style content jq-settings]}]
  (swap! rstate assoc-in [:rcells id] [rcell-comp {:id id
                                                   :title (or title id)
                                                   :style style
                                                   :content content
                                                   :jq-settings jq-settings}]))

(defonce default-settings {:selector ".cljs"
                           :selector_eval_js ".js"
                           :selector_eval_markdown ".md"
                           :selector_eval_html ".html"
                           :editor_type "code-mirror"
                           :eval_idle_msec 9999999})

(defn rklipse-comp [{:keys [id lang snippet from-gist settings extra]}]
  (create-class
   {:component-did-mount (fn [_]
                           (klipse/init (clj->js (merge default-settings settings)))
                           (when from-gist (js/loadGist (:id from-gist) (:file from-gist) id)))
    :reagent-render      (fn [{:keys [lang snippet]}]
                           [:div.rklipse
                            [:div {:class ["klipse" lang]}
                             snippet] extra])}))

(defn rklipse [id & {:keys [title style lang snippet from-gist klipse-settings jq-settings extra-content]
                     :or {lang "cljs"}}]
  (rcell id
         :title title
         :style style
         :jq-settings jq-settings
         :content [rklipse-comp {:id id
                                 :lang lang
                                 :snippet snippet
                                 :from-gist from-gist
                                 :settings klipse-settings
                                 :extra extra-content}]))