/*unAlert();
function  unAlert(){
    {
        setTimeout(function(){ alert("BINE AI VENIT"); }, 1500);
    }
}*/
document.getElementById("ultimul_joc").innerHTML = "Ultimul test: "+localStorage.getItem("nume") +" a avut nota "+ localStorage.getItem("nota");
var d = new Date();
var luna= d.getMonth() + 1;
var an= d.getFullYear();
var zi= d.getDate();

var seconds=15;
var ok=0;
var start_ok=0;
function dau_start(){
    var nume = prompt("Numele tau:", "Nume");
    start_ok=1;
    setInterval(am_dat_start, 1000);
    function am_dat_start(){
        document.getElementById("timp").innerHTML = seconds + " secunde ";
        if (seconds === 0) {
            document.getElementById("timp").innerHTML = "Timp expirat";
            document.getElementById("timp").setAttribute("class", "timpul");

            if(ok===0)
            { verificare(); ok=1;} // se face verificarea in caz ca nu s-a apasat verificare

            document.getElementById("nota").innerHTML = "Astazi, " +zi + "." +luna + "." +an+", "+nume+ ", NOTA TA ESTE "+ punctaj; //afisez
            localStorage.setItem("nume", nume); localStorage.setItem("nota", punctaj);
            if(punctaj===10) {
                document.body.style.backgroundColor = "green";

            } //trebuia asa se schimbe daca e 10
        }
        else
        { seconds--;}
    }

}

var punctaj=1;
function verificare(){
    if(start_ok===1) {
        var i1 = document.getElementById("nr");
        var i2 = document.getElementById("NY");
        var i3 = document.getElementById("BE");
        if (i1.value == 3) {
            punctaj = punctaj + 3;
        }
        if (i2.checked) {
            punctaj = punctaj + 3;
        }
        if (i3.checked) {
            punctaj = punctaj + 3;
        }
        seconds = 0;
        ok = 1;
    }
}



//jocul random

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var preturi=["300 euro","1000 euro","500 euro","250 euro","150 euro","480 euro","1500 euro"];
var locatie=["1.png","2.png","3.png","4.png","5.png","6.png","7.png"];


function ambele(){
    document.getElementById("enter").innerHTML =preturi[getRandomInt(preturi.length)];
    changeSemn();
}

window.onload=function(event)
{
    var tasta=document.getElementById("enter");
    document.body.onkeyup=function(event)
    {
        switch (event.key) {
            case "Enter":
            {document.getElementById("enter").innerHTML =preturi[getRandomInt(preturi.length)];
                break;}
        }

    }

}

function changeSemn()
{
    document.getElementById("semn").src =locatie[getRandomInt(locatie.length)];
}

//partea 2 din joc

var stiluri=["stil1","stil2","stil3","stil4"];

function myFunction(id){
    var elem = document.getElementById(id);
    document.getElementById("demo").innerHTML = window.getComputedStyle(elem, null).getPropertyValue("background-color");
}


function schimb_palarie(event) {
    if (document.getElementById("stop").checked) {
        event.stopPropagation();
    }
    document.getElementById("palarie").classList.add(stiluri[getRandomInt(stiluri.length)]);
    var elem = document.getElementById("palarie");
    document.getElementById("C3").innerHTML = "PALARIA TA:  " + window.getComputedStyle(elem, null).getPropertyValue("background-color");

}
function schimb_bluza(event) {
    if (document.getElementById("stop").checked) {
        event.stopPropagation();
    }
    document.getElementById("bluza").classList.add(stiluri[getRandomInt(stiluri.length)]);
    var elem = document.getElementById("bluza");
    document.getElementById("C2").innerHTML = "BLUZA TA:  " + window.getComputedStyle(elem, null).getPropertyValue("background-color");

}

function schimb_pantaloni() {
    document.getElementById("pantaloni").classList.add(stiluri[getRandomInt(stiluri.length)]);
    var elem = document.getElementById("pantaloni");
    document.getElementById("C1").innerHTML = "PANTALONII TAI:  " + window.getComputedStyle(elem, null).getPropertyValue("background-color");
}
