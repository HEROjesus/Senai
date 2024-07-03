let derrotas = 0;
let vitorias = 0;
const vitoriaFinal = vitorias

document.getElementById("pedra").addEventListener("click", () => play("pedra"));
document.getElementById("papel").addEventListener("click", () => play("papel"));
document.getElementById("tesoura").addEventListener("click", () => play("tesoura"));

function play(escolhaUsuario) {
  const escolhas = ["pedra", "papel", "tesoura"];
  const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];

  const resultado = comparar(escolhaUsuario, escolhaComputador);

  exibirResultado(escolhaUsuario, escolhaComputador, resultado);

  if (resultado === "Você ganhou!") {
    vitorias++;
  } else if (resultado === "Você perdeu!") {
    derrotas++;
  }

  document.getElementById(
    "quantidadeVitorias"
  ).textContent = `Vitórias: ${vitorias}`;
  document.getElementById(
    "quantidadeDerrotas"
  ).textContent = `Derrotas: ${derrotas}`;
}


function comparar(escolhaUsuario, escolhaComputador) {
  if (escolhaUsuario === escolhaComputador) {
    return "Empate!";
  } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
  ) {
    return "Você ganhou!";
  } else {
    return "Você perdeu!";
  }
}
function exibirResultado(escolhaUsuario, escolhaComputador, resultado) {
  const mensagem = `Você escolheu ${escolhaUsuario}. O computador ${escolhaComputador}. ${resultado}`;
  document.querySelector(".resultado").textContent = mensagem;
  document.querySelector(".resultadoFinal").textContent = resultado;
}


