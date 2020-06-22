(ns replica.state
  (:require [reagent.core :as reagent]))

(defonce rcells (reagent/atom (sorted-map)))
