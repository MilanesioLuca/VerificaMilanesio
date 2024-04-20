let utente = "Giacomo";
let password = "Giacomo";


function login(){

    let ut = prompt("Inserisci un utente");
    let pw = prompt("Inserisci una password");

    if(utente == ut && password == pw){
        alert("Acccesso effettuato");
        let btnlogin = document.getElementById("login");
        btnlogin.innerHTML = "Ciao " + utente;
    
    }
    else
        alert("Password o utente sbagliati");

}

function Inserisci() {
    var pagante = document.getElementById("pagante").value;
    var pagato = document.getElementById("pagato").value;
    var importo = document.getElementById("importo").value;

    if (pagante !== pagato && importo > 0 && pagante !== utente){
        var nuovoPagamento = document.createElement("article");
        nuovoPagamento.innerHTML = `
            <span>24<span>04/24</span></span>
            <div>${pagante}</div>
            <div class="uscita">${importo} €</div>
            <div>${pagato}</div>
        `;
        document.getElementById("pagamentidaconfermare").appendChild(nuovoPagamento);
    
    } 
    else if(pagante !== pagato && importo > 0){
        var nuovoPagamento = document.createElement("article");
        nuovoPagamento.innerHTML = `
            <span>24<span>04/24</span></span>
            <div>${pagante}</div>
            <div class="uscita">${importo} €</div>
            <div>${pagato}</div>
        `;
        document.getElementById("tuttiPagamenti").appendChild(nuovoPagamento);
 
    }
    else
        alert("Pagante e pagato devono essere diversi e l'importo deve essere positivo!");

}

function calcola() {
    var pagato = document.getElementById("pagato").value;
    var importo = parseFloat(document.getElementById("importo").value);

    if(pagato == "ut5" || pagato == "ut6"){
        let  divisione = parseFloat(importo / 4);
        document.getElementById("importo1").innerHTML = divisione;
        document.getElementById("importo2").innerHTML = divisione;
        document.getElementById("importo3").innerHTML = divisione;
        document.getElementById("importo4").innerHTML = divisione;
    } else {
        alert("Il pagato deve essere un negozio o un locale per calcolare la divisione!");
    }
}

function confermaPagamento() {
    var pagante = document.getElementById("pagante").value;
    var pagato = document.getElementById("pagato").value;
    var importo = document.getElementById("importo").value;

    var conferma = prompt("Conferma? Si/No");
    if (conferma == "Si") {
        var nuovoPagamento = document.createElement("article");
        nuovoPagamento.innerHTML = `
            <span>24<span>04/24</span></span>
            <div>${pagante}</div>
            <div class="uscita">${importo} €</div>
            <div>${pagato}</div>
        `;
        document.getElementById("tuttiPagamenti").appendChild(nuovoPagamento);


    }
}


