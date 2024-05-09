document.addEventListener("DOMContentLoaded", function () {
  let agronomiaInfo = document.getElementById("agronomia-info");
  let engCompInfo = document.getElementById("engcomp-info");
  let logoAgro = document.querySelector(".logo-agro");
  let logoEng = document.querySelector(".logo-eng");
  let fundoOfuscado = document.getElementById("fundo-ofuscado");

  function abrirBox(box) {
    box.style.display = "block";
    fundoOfuscado.style.display = "block";
  }

  function fecharBox(box) {
    box.style.display = "none";
    fundoOfuscado.style.display = "none";
  }

  logoAgro.addEventListener("click", function () {
    abrirBox(agronomiaInfo);
  });

  logoEng.addEventListener("click", function () {
    abrirBox(engCompInfo);
  });

  let fecharBoxes = document.querySelectorAll(".curso-info .fechar-box");
  fecharBoxes.forEach(function (fecharBoxIcon) {
    fecharBoxIcon.addEventListener("click", function () {
      let box = this.closest('.curso-info');
      fecharBox(box);
    });
  });
});
