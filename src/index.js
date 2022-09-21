import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css"

import "./main.css";

var bokorSzam = 0;
function bokorSzamolas(){
    bokorSzam+=1;
    console.log(bokorSzam);
    document.getElementById('bokorkep').innerHTML= '<a target="_self" href="#bokorkep" id="bokorkep" title="'+bokorSzam+'"><img src="./images/bokor.jpg"></a>';
}

var bogyoSzam = 0;
function bogyoSzamolas(){
    bogyoSzam++;
    console.log(bogyoSzam);
    document.getElementById('bogyo').innerHTML = '<a id="bogyo" href="#bogyo" title="' + bogyoSzam.toString() + '"><img src="./images/homoktovis_bogyos.jpg" class="bal" align="left"></a>';
}

var parlatSzam = 0;
function parlatSzamolas(){
    parlatSzam+=1;
    document.getElementById('parlat').innerHTML= '<a id="parlat" href="#parlat" title="'+parlatSzam+'"><img src="./images/homoktovis_parlat.png" alt="" class="bal" align="left"></a>';
}

var szaritottSzam = 0;
function szaritottSzamolas(){
    szaritottSzam+=1;
    document.getElementById('szaritott').innerHTML= '<a target="_self" id="szaritott" title="'+szaritottSzam+'"><img src="./images/homoktovis_szaritottbogyo.jpg" class="jobb" align="right"></a>';
}

var orlemenySzam = 0;
function orlemenySzamolas(){
    orlemenySzam+=1;
    document.getElementById('orlemeny').innerHTML= '<a target="_self" id="szaritott" title="'+orlemenySzam+'"><img src="./images/homoktovis_szaritottorlemeny.jpg" class="jobb" align="right"></a>';
}

function torles (){
    const element = document.getElementById("grat");
    element.remove();
}

function szinValt(){
    document.getElementById("homokcim").style.color = document.getElementById("rgb").value;
}

window.onload = () => {
    document.getElementById("bezaras").addEventListener('click', torles);
    
}

function init (){
    document.getElementById("szinvalto").addEventListener('click', szinValt);
    document.getElementById("bokorkep").addEventListener("click", bokorSzamolas);
    document.getElementById("bogyo").addEventListener("click", bogyoSzamolas);
    document.getElementById("parlat").addEventListener("click", parlatSzamolas);
    document.getElementById("szaritott").addEventListener("click", szaritottSzamolas);
    document.getElementById("orlemeny").addEventListener("click", orlemenySzamolas);
}

document.addEventListener("DOMContentLoaded", init);


console.log("Loaded");