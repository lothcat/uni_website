let navToHot = document.getElementById("hotMokkaBtn");
navToHot.onclick = switchPageHot;

let navToIced = document.getElementById("icedMokkaBtn");
navToIced.onclick = switchPageIced;

function switchPageHot() {
    window.location.href = "../html/hot_mokka.html";
}

function switchPageIced() {
    window.location.href = "../html/iced_mokka.html";
}