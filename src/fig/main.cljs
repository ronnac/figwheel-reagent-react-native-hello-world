(ns fig.main
  (:require [reagent.core :as r]
            [reagent.react-native :as rrn]
            [clojure.string :as str]))

;; (defonce timer (r/atom (js/Date.)))

;; (defonce time-color (r/atom "#f34"))

;; (defonce time-updater (js/setInterval
;;                        #(reset! timer (js/Date.)) 1000))

;; (defn greeting [message]
;;   [:h1 message])

;; (defn clock []
;;   (let [time-str (-> @timer .toTimeString (str/split " ") first)]
;;     [:div.example-clock
;;      {:style {:color @time-color}}
;;      time-str]))

;; (defn color-input []
;;   [:div.color-input
;;    "Time color: "
;;    [:input {:type "text"
;;             :value @time-color
;;             :on-change #(reset! time-color (-> % .-target .-value))}]])

;; (defn simple-example []
;;   [:div
;;    [greeting "Hello world, it is now"]
;;    [clock]
;;    [color-input]])

;; (defn ^:export run []
;;   (rdom/render [simple-example] (js/docment.body)))


(defn hello []
  [rrn/view {:style {:flex 1 :align-items "center" :justify-content "center"}}
   [rrn/text "Hello my World!"]])

(defn renderfn [props]
  (r/as-element [hello]))

(defn figwheel-rn-root []
  (renderfn {}))
;; (def <> react/createElement)

;; (defn renderfn [props]
;;   (<> rn/View
;;       #js {:style #js {:backgroundColor "#FFFFFF"
;;                        :flex 1
;;                        :justifyContent "center"}}
;;       (<> rn/Text
;;           #js {:style #js {:color "green"
;;                            :textAlign "center"}}
;;           (str "HELLO THERE!"))))

;; ;; the function figwheel-rn-root MUST be provided. It will be called by
;; ;; by the react-native-figwheel-bridge to render your application.
;; (defn figwheel-rn-root []
;;   (renderfn {}))
