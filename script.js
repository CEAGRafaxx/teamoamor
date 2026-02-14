const sim = document.getElementById("sim");
const nao = document.getElementById("nao");
const inicio = document.getElementById("inicio");
const final = document.getElementById("final");

let escala = 1;

nao.addEventListener("click", () => {

    escala += 0.4;

    sim.style.transform = `scale(${escala})`;

    if (escala >= 4) {
        sim.style.position = "fixed";
        sim.style.top = "0";
        sim.style.left = "0";
        sim.style.width = "100vw";
        sim.style.height = "100vh";
        sim.style.fontSize = "3rem";
        sim.style.borderRadius = "0";
        sim.style.zIndex = "9999";
    }
});

sim.addEventListener("click", () => {
    inicio.style.display = "none";
    final.style.display = "flex";
});
