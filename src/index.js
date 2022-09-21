import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css"

import "./main.css";

function torles (){
    const element = document.getElementById("grat");
    element.remove();
}

function init (){
    document.getElementById("bezaras").addEventListener('click', torles);
}

document.addEventListener("DOMContentLoaded", init);


console.log("Loaded");