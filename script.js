const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica");
console.log(estatisticas);

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controle.forEach((element) => {
  element.addEventListener("click", (event) => {
    const operador = event.target.dataset.controle;
    const controle = event.target.parentNode;
    const peca = event.target.dataset.peca;

    manipularDados(operador, controle);
    atualizaEstatisticas(peca);
  });
});

function manipularDados(operador, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operador === "+") {
    peca.value = parseInt(peca.value) + 1;
  } else {
    peca.value = parseInt(peca.value) - 1;
  }
}

function atualizaEstatisticas(peca) {
  estatisticas.forEach((event) => {
    const status = event.dataset.estatistica;
    const valor = event.textContent;

    event.textContent = parseInt(valor) + pecas[peca][status];
  });
}
