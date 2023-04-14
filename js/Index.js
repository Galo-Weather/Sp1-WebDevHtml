//sistema de formulario e validaçao de conta
var cidades = document.getElementById("cidades"); 
var precipitacao = document.getElementById("precipitacao"); 

function validacao(event) { 
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email == "contatogalofiap@gmail.com" && senha == "12345") {
    var cidades = document.getElementById("cidades");
    var precipitacao = document.getElementById("precipitacao");
    cidades.removeAttribute("disabled");
    precipitacao.removeAttribute("disabled");
  }
}
