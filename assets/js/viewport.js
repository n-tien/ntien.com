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

    for (var i = 0; i < animationMiddle.length; i++) {
    if (elementInViewport(animationMiddle[i])) {
        animationMiddle[i].classList.add("visible");
    } else {
        animationMiddle[i].classList.remove("visible");
        }
    }
}
var animationMiddle = document.querySelectorAll(".animation-middle");
var animationBox = document.querySelectorAll(".animation-box");
window.addEventListener("load", setViewportVisibility);
window.addEventListener("scroll", setViewportVisibility);

function elementInViewport(e) {
    var bounding = e.getBoundingClientRect();
    var myElementHeight = e.offsetHeight;
    var myElementWidth = e.offsetWidth;

    return (bounding.top >= -myElementHeight +32
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight -32);
}