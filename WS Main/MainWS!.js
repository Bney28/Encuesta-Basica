let botonesDeNumeros = document.querySelectorAll(".botones")
let botonSubmit = document.querySelector(".botonSubmit")
let containerBotones = document.querySelector(".container-botones");
let containerGracias = document.querySelector(".container-gracias")
let registrado = document.querySelector("span")
let botonElegido;


botonSubmit.addEventListener("click", () => {
    if (botonElegido != undefined) {
        containerBotones.style.display = "none";
        containerGracias.style.display = "block";
    }})


botonesDeNumeros.forEach(element => {
    element.addEventListener("click", () => {
        botonElegido = element.getAttribute("value")
        console.log(botonElegido);
        registrado.replaceChildren("You selected " + botonElegido + " out of 5")
    })

});
