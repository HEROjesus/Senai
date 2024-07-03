document.getElementById("verificar").addEventListener("click", function () {
  const idadeInput = document.getElementById("inputIdade").value;
  const idadeNum = parseInt(idadeInput, 10);

  const resultado = document.getElementById("resultado");

  if (isNaN(idadeNum) || idadeNum < 0) {
    resultado.textContent = "Por favor, insira uma idade válida";
  } else if (idadeNum < 18) {
    resultado.textContent = "Você é menor de idade";
  } else if (idadeNum >= 18 && idadeNum < 60) {
    resultado.textContent = "Você é maior de idade e tem menos de 60 anos";
  } else {
    resultado.textContent = "Você é bem maior de idade";
  }
});
