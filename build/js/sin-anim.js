/**
 * Created by Sinaragomon on 28.04.2018.
 */
;(function () {
    function ready(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    function isInViewport(el) {
        var box = el.getBoundingClientRect();
        var docElem = document.documentElement;

        if (box.left >= 0 && box.right <= (window.innerWidth || docElem.clientWidth)) {
            if (box.top >= box.height * -1 && box.bottom <= (window.innerHeight || docElem.clientHeight) + box.height * 1.5) return true;
        }

        return false;
    }

    function onScroll() {
        var list = document.querySelectorAll(".sin-anim");

        for (var i = 0; i < list.length; i++) {
            var el = list[i];
            var in_view = isInViewport(el);

            if (!el.classList.contains("animated") && in_view) {
                el.setAttribute("style", "animation-name: " + el.getAttribute("data-anim"));
                el.className = "animated " + el.className;
            } else if (!in_view) {
                el.setAttribute("style", "animation-name: none");
                el.classList.remove("animated");
            }
        }
    }

    ready(function () {
        window.addEventListener("scroll", onScroll, false);
        onScroll();
    });
})();