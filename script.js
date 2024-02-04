let aboutEl = document.getElementById("aboutTab");
let timetovisitel = document.getElementById("timeToVisitTab");
let attractionsel = document.getElementById("attractionsTab");

let aboutButtonel = document.getElementById("aboutButton");
let timeToVisitButtonel = document.getElementById("timeToVisitButton");
let attractionsButtonel = document.getElementById("attractionsButton");

timetovisitel.classList.add("d-none");
attractionsel.classList.add("d-none");

function about() {
    aboutEl.classList.remove("d-none");
    timetovisitel.classList.add("d-none");
    attractionsel.classList.add("d-none");

    aboutButtonel.classList.add("selected-button");
    timeToVisitButtonel.classList.remove("selected-button");
    attractionsButtonel.classList.remove("selected-button");
}

function timetovisit() {
    aboutEl.classList.add("d-none");
    timetovisitel.classList.remove("d-none");
    attractionsel.classList.add("d-none");

    aboutButtonel.classList.remove("selected-button");
    timeToVisitButtonel.classList.add("selected-button");
    attractionsButtonel.classList.remove("selected-button");
}

function attractions() {
    aboutEl.classList.add("d-none");
    timetovisitel.classList.add("d-none");
    attractionsel.classList.remove("d-none");
    document.getElementById("attractionsel");
    aboutButtonel.classList.remove("selected-button");
    timeToVisitButtonel.classList.remove("selected-button");
    attractionsButtonel.classList.add("selected-button");
}