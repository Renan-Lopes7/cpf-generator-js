import ValidaCpf from './ValidaCpf.js';
import GeraCPF from './GeraCPF.js';


(function () {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector(".cpf-gerado");
    const btn = document.querySelector(".btn");
    cpfGerado.innerHTML = gera.geraNovoCpf();

    btn.addEventListener("click", (e) => {
        const btn = e.target
        if (btn.classList.contains('btn')) {
            cpfGerado.innerHTML = gera.geraNovoCpf();
        }
    })
})();

