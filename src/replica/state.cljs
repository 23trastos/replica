(ns replica.state
  (:require [reagent.core :as reagent]))

(defonce rstate (reagent/atom (sorted-map)))