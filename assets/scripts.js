const btnFaleConosco = document.querySelector(".btn-contato");
const btnOrcamento = document.querySelector(".btn-orcamento");
const form = document.querySelector(".form-fale-conosco");
const mascara = document.querySelector(".mascara-form");

function chamaForm(){
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

btnFaleConosco.addEventListener('click', chamaForm);

btnOrcamento.addEventListener('click', () =>{
    alert("Orçamento solicitado");
})

mascara.addEventListener('click', () =>{
    mascara.style.visibility = "hidden";
    form.style.left = "-280px";
    form.style.transform = "translateX(0)";
})
