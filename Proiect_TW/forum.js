

window.onload=generare();



function generare(){
    fetch("postari_vechi.json").then(function(res){
        res.text().then(function(text){
            afiseaza(JSON.parse(text));
        });
    });
}


function afiseaza(postari){
    for(i=0;i<postari.length;i++){
        var para = document.createElement("P");
        var titl = document.createElement("P");
        titl.innerText =postari[i].titlu + "   ~ postat de "+postari[i].autor+" ~ ";
        titl.style.fontSize = "larger";
        titl.style.backgroundColor="gray";
        document.getElementById("postari").appendChild(titl);
        para.innerText =postari[i].text;
        document.getElementById("postari").appendChild(para);
    }

}

function cont(){
    fetch("conturi.json").then(function(res){
        res.text().then(function(text){
            login(JSON.parse(text));
        });
    });
}


function login(cont){
    var ok=0;
    var user1=document.getElementById("user").value;
    var pass1=document.getElementById("psw").value;

    for(i=0;i<cont.length;i++){
        var userul= cont[i].user;
        var passul = cont[i].pass;

        if(userul===user1 && passul===pass1) ok=1;
    }
if(ok==1)  {document.getElementById("well").innerText="Bun venit " + user1;
    document.getElementById("well").style.fontSize = "larger";
           document.getElementById("out").style.visibility="visible";
}
else {document.getElementById("well").innerText="User sau parola incorecta";  document.getElementById("well").style.fontSize = "larger";}

}
function iesire_cont() {
    document.getElementById("well").innerText="Bun ramas";
    document.getElementById("well").style.fontSize = "larger";
        document.getElementById("out").style.visibility="hidden";
}


function afisez_postare() {
    var titlu = document.getElementById("nume").value;
    var autor = document.getElementById("autor").value;
    var mesaj = document.getElementById("mesaj").value;
    var para = document.createElement("P");
    var titl = document.createElement("P");
    titl.innerText = titlu + "   ~ postat de "+autor+" ~ ";
    para.innerText = mesaj;
    titl.style.fontSize = "larger";
    titl.style.backgroundColor="gray";
    document.getElementById("postarile_noi").appendChild(titl);
    document.getElementById("postarile_noi").appendChild(para);

}


