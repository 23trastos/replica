(ns replica.utils)

(defn $  [query] (js/$ query))

(defn $# [id]    ($ (str "#" id)))

(defn $· [id]    ($ (str "." id)))
