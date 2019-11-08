const calc_input = document.querySelector("#calc-input");
const calc_btn = document.querySelector("#calc-btn");
const costo_mensual = document.querySelector("#costo-mensual");
const costo_fijo = Number(695);

calc_btn.addEventListener("click", () => {
    const res = costo_fijo + Number(calc_input.value);
    costo_mensual.innerHTML = res;
});