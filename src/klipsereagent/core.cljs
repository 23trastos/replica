(ns klipsereagent.core
  (:require [reagent.core :as reagent]
            [klipse.run.plugin.plugin] ;; this namespace initializes Klipse. We require it for its side effects
            [klipse.plugin :as klipse-plugin]))

(defn klipse-wrapper
  [{:keys [scripts content settings]}]
  (reagent/create-class
   {:component-did-mount (fn [_]
                           (klipse-plugin/init (clj->js settings)))
    :reagent-render      (fn [{:keys [content]}]
                           content)}))

(defn klipse-snippet []
  [klipse-wrapper {:content [:div
                             [:div.klipse.language-klipse "(require '[reagent.core :as r])"]
                             [:div.klipse.language-reagent "[:div {:style {:color \"red\"}} \"hello world!\"]"]
                             [:div.klipse.language-klipse "(+ 3 3)"]]
                   :settings {:selector ".language-klipse"
                              :selector_reagent ".language-reagent"}}])

(defn mount-root []
  (reagent/render [:div [klipse-snippet]] (.getElementById js/document "app")))

(mount-root)
