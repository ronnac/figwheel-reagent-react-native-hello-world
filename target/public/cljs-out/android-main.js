import {npmDeps} from "./npm_deps.js";
window.CLOSURE_UNCOMPILED_DEFINES = {"figwheel.repl.connect_url":"ws:\/\/localhost:9500\/figwheel-connect?fwprocess=ee60fd&fwbuild=android","cljs.core._STAR_target_STAR_":"bundle"};
window.CLOSURE_NO_DEPS = true;
if(typeof goog == "undefined") document.write('<script src="/cljs-out/android/goog/base.js"></script>');
document.write('<script src="/cljs-out/android/goog/deps.js"></script>');
document.write('<script src="/cljs-out/android/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("figwheel.core");</script>');
document.write('<script>goog.require("figwheel.main");</script>');
document.write('<script>goog.require("figwheel.repl.preload");</script>');
document.write('<script>goog.require("figwheel.main.system_exit");</script>');
document.write('<script>goog.require("process.env");</script>');
document.write('<script>goog.require("fig.main");</script>');
window.require = function(lib) {
   return npmDeps[lib];
}
