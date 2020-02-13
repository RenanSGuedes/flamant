function calculaGrandeza() {
    var vazao; var comprimento; var atrito; var diametro; var hf;

    hf = document.getElementById("perd1").value;
    vazao = document.getElementById("vaz1").value;
    comprimento = document.getElementById("comp1").value;
    atrito = document.getElementById("atr1").value;
    diametro = document.getElementById("dia1").value;

    var hf1 = 6.107*atrito*Math.pow(vazao,1.75)*comprimento/(Math.pow(diametro,4.75));
    var vazao1 = Math.pow((hf*Math.pow(diametro,4.75))/(atrito*comprimento*6.107),1/1.75);
    var comprimento1 = (hf*Math.pow(diametro,4.75))/(6.107*atrito*Math.pow(vazao,1.75));
    var atrito1 = (hf*Math.pow(diametro,4.75))/(6.107*Math.pow(vazao,1.75)*comprimento);
    var diametro1 = Math.pow((6.107*atrito*Math.pow(vazao,1.75)*comprimento)/(hf),1/4.75);

    if (hf === "" && vazao !== "" && comprimento !== "" && atrito !== "" && diametro !== "") {
        return hf1;
    } else if (hf !== "" && vazao === "" && comprimento !== "" && atrito !== "" && diametro !== ""){
        return vazao1;
    }  else if (hf !== "" && vazao !== "" && comprimento === "" && atrito !== "" && diametro !== ""){
        return comprimento1;
    } else if (hf !== "" && vazao !== "" && comprimento !== "" && atrito === "" && diametro !== "") {
        return atrito1;
    } else if (hf !== "" && vazao !== "" && comprimento !== "" && atrito !== "" && diametro === "") {
        return diametro1;
    }
}

function converteParaCentimetros() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (100 * parseFloat(calculaGrandeza())).toPrecision(3)+" cm";
}
function converteParaMetros() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (parseFloat(calculaGrandeza())).toPrecision(3)+" m";
}
function converteParaMilimetros() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (1000 * parseFloat(calculaGrandeza())).toPrecision(3)+" mm";
}
function escreveAtrito() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (parseFloat(calculaGrandeza())).toPrecision(3);
}

function converteParaMetrosCubicosPorHora() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (3600 * parseFloat(calculaGrandeza())).toPrecision(3) +" m³/h";
}
function converteParaMetrosCubicosPorMinuto() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (60 * parseFloat(calculaGrandeza())).toPrecision(3) +" m³/min";
}
function converteParaMetrosCubicosPorSegundo() {
    x = document.getElementsByClassName("textArea");
    x[0].innerHTML = (parseFloat(calculaGrandeza())).toPrecision(3) +" m³/s";
}
