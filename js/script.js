var salario = document.querySelector("#ganho-mes");
var horas = document.querySelector("#horas-dia");
var resposta = document.querySelector("#resposta");

const calcularValorHora = () => {
  var valorSalario = salario.valueAsNumber;
  var valorHoras = horas.valueAsNumber;

  var horasMes = valorHoras * 22;
  var valorHora = 0.0;
  if (valorHoras > 0) {
    valorHora = (valorSalario / horasMes).toFixed(2);
  }

  resposta.textContent = "R$ " + valorHora;
};
