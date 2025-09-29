const input = document.getElementById("mensagemInput");
const Mostrar = document.getElementById("btn_Mostrar");
const Limpar = document.getElementById("btn_Limpar");
const mensagemArea = document.getElementById("mensagemArea");
const Incrementar = document.getElementById("btn_Incrementar");
const Decrementar = document.getElementById("btn_Decrementar");
const Zerar = document.getElementById("btn_Zerar");
const contadorValor = document.getElementById("contador_Valor");
let contador = 0;

Mostrar.addEventListener("click", function () {
  const texto = input.value;
  if (texto.trim() !== "") {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = texto;
    mensagemArea.appendChild(novoParagrafo);
    input.value = "";
  }
});

Limpar.addEventListener("click", function () {
  mensagemArea.innerHTML = "";
});

Incrementar.addEventListener("click", function () {
  contador++;
  contadorValor.textContent = contador;
});

Decrementar.addEventListener("click", function () {
  contador--;
  contadorValor.textContent = contador;
});

Zerar.addEventListener("click", function () {
  contador = 0;
  contadorValor.textContent = contador;
});