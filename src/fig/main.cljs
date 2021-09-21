(ns fig.main
  (:require [reagent.core :as r]
            [reagent.react-native :as rrn]
            [clojure.string :as str]))


(defn hello []
  [rrn/view {:style {:flex 1 :align-items "center" :justify-content "center"}}
   [rrn/text "Hello my World!"]])

(defn renderfn [props]
  (r/as-element [hello]))

(defn figwheel-rn-root []
  (renderfn {}))
