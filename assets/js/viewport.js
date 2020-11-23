const animationRow = document.querySelectorAll(".animation-row");
const animationCol = document.querySelectorAll(".animation-col");
const animationBoxL = document.querySelectorAll(".animation-box-l");
const animationBoxR = document.querySelectorAll(".animation-box-r");

function setViewportVisibility() {
    for (let a of animationBoxR) {
        if (elementInViewport(a)) {
            a.classList.add("visible-r");
        } else {
            a.classList.remove("visible-r");
        }
    }
    for (let a of animationBoxL) {
        if (elementInViewport(a)) {
            a.classList.add("visible-l");
        } else {
            a.classList.remove("visible-l");
        }
    }

    for (let a of animationCol) {
        if (elementInViewport(a)) {
            a.classList.add("visible-col");
        } else {
            a.classList.remove("visible-col");
        }
    }

    for (let a of animationRow) {
        if (elementInViewport(a)) {
            a.classList.add("visible-row");
        } else {
            a.classList.remove("visible-row");
        }
    }
}
window.addEventListener("load", setViewportVisibility);
window.addEventListener("scroll", setViewportVisibility);

function elementInViewport(e) {
    const bounding = e.getBoundingClientRect();
    const myElementHeight = e.offsetHeight;

    return (bounding.top >= -myElementHeight
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight);
}