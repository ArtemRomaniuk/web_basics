console.log("DShop study project!")
console.log("This is the first serious study project made by first-year student of UZhNU Romaniuk Artem")


//----------------------Category accordion---------------------------
let isExtended = true;
const category__content = document.querySelector(".category__content");

function rollUp(event) {
    document.querySelector(".accordion>svg").style.transform = "rotate(0deg)";
    category__content.style.height = "240px";
    category__content.style.pointerEvents = "all";
    category__content.style.overflow = "visible";
    document.querySelectorAll(".category__content>a").forEach(el => {
        el.style.height = "25px";
    })
    isExtended = true;
}

document.addEventListener("DOMContentLoaded", rollUp());
document.querySelector(".accordion").addEventListener("click", (event) => {
    event.preventDefault();

    if (isExtended) {
        document.querySelector(".accordion>svg").style.transform = "rotate(-180deg)";
        category__content.style.height = "0";
        category__content.style.pointerEvents = "none";
        category__content.style.overflow = "hidden";
        document.querySelectorAll(".category__content>a").forEach(el => {
            el.style.height = "0";
        })
        isExtended = false;

    } else {
        rollUp();
    }
});