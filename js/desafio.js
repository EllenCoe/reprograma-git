var valor_hora = document.querySelector("#valor-hora");
var horas_projeto = document.querySelector("#horas-projeto");
var resposta = document.querySelector("#resposta");

const calcular = () => {
  var valorHora = valor_hora.valueAsNumber;
  var horasProjeto = horas_projeto.valueAsNumber;

  var valorTotal = valorHora * horasProjeto;

  if (valorTotal < 0) valorTotal = valorTotal * -1;

  valor_hora.value = 0;
  horas_projeto.value = 0;
  valorTotal = valorTotal.toFixed(2);
  resposta.textContent = "R$ " + valorTotal;
};
