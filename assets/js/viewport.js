// function viewportChecker(e) {
//     var rect = e.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

function setViewportVisibility() {
    for (var i = 0; i < animationBox.length; i++) {
    if (elementInViewport(animationBox[i])) {
        animationBox[i].classList.add("visible");
    } else {
        animationBox[i].classList.remove("visible");
        }
    }

    for (var i = 0; i < animationCol.length; i++) {
    if (elementInViewport(animationCol[i])) {
        animationCol[i].classList.add("visible-col");
    } else {
        animationCol[i].classList.remove("visible-col");
        }
    }

    for (var i = 0; i < animationRow.length; i++) {
    if (elementInViewport(animationRow[i])) {
        animationRow[i].classList.add("visible-row");
    } else {
        animationRow[i].classList.remove("visible-row");
        }
    }
}
var animationRow = document.querySelectorAll(".animation-row");
var animationCol = document.querySelectorAll(".animation-col");
var animationBox = document.querySelectorAll(".animation-box");
window.addEventListener("load", setViewportVisibility);
window.addEventListener("scroll", setViewportVisibility);

function elementInViewport(e) {
    var bounding = e.getBoundingClientRect();
    var myElementHeight = e.offsetHeight;
    var myElementWidth = e.offsetWidth;

    return (bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight);
}