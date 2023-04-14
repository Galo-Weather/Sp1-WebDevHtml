//sistema de formulario e validaçao de conta
var cidades = document.getElementById("cidades"); 
var precipitacao = document.getElementById("precipitacao"); 

function validacao(event) { 
    event.preventDefault();
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email == "contatogalofiap@gmail.com" && senha == "12345") {
    var cidades = document.getElementById("cidades");
    var precipitacao = document.getElementById("precipitacao");
    cidades.removeAttribute("disabled");
    precipitacao.removeAttribute("disabled");
  }
}

function selectCidades() {
    var c1 = document.getElementById("cidades");
    var capacidade = document.getElementById("capacidade");
    var CS = c1.options[c1.selectedIndex].value;
  
    if (CS == "op1") {
      capacidade.innerHTML = "Capacidade: 10mm de chuva";
    } else if (CS == "op2") {
      capacidade.innerHTML = "Capacidade: 15mm";
    } else {
      capacidade.innerHTML = "Capacidade:";
    }
  }
  