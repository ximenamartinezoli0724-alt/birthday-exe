const boton = document.getElementById("botonSorpresa");
const mensaje = document.getElementById("mensaje");
const inicio = document.getElementById("inicio");
const terminal = document.querySelector(".terminal");
const confeti = document.getElementById("confeti");


/* TERMINAL */

const lineas = [
    "> Iniciando Birthday.exe...",
    "> Buscando usuario...",
    "> Usuario encontrado: Luis 👀",
    "> Alias encontrado: Pequeñito 🤭",
    "> Analizando nivel de amistad...",
    "> Resultado: demasiado alto 💙",
    "> Preparando sorpresa...",
    "> Sistema listo ✓"
];


let numero = 0;


function escribirLinea() {

    if (numero < lineas.length) {

        const linea = document.createElement("p");

        linea.textContent = lineas[numero];

        terminal.appendChild(linea);

        numero++;

        setTimeout(escribirLinea, 600);

    } else {

        setTimeout(function () {

            inicio.style.display = "none";

        }, 1000);

    }
}


escribirLinea();


/* CONFETI */

function lanzarConfeti() {

    const colores = [
        "#60a5fa",
        "#93c5fd",
        "#67e8f9",
        "#f9a8d4",
        "#fde68a",
        "#c4b5fd"
    ];


    for (let i = 0; i < 60; i++) {

        const pieza = document.createElement("div");

        pieza.classList.add("confeti");

        pieza.style.left =
            Math.random() * 100 + "%";

        pieza.style.backgroundColor =
            colores[
                Math.floor(
                    Math.random() * colores.length
                )
            ];

        pieza.style.animationDelay =
            Math.random() * 1 + "s";

        pieza.style.animationDuration =
            2 + Math.random() * 2 + "s";

        confeti.appendChild(pieza);


        setTimeout(function () {

            pieza.remove();

        }, 4500);
    }
}


/* BOTÓN */

boton.addEventListener("click", function () {

    boton.disabled = true;

    boton.textContent = "⏳ Ejecutando...";


    setTimeout(function () {

        boton.textContent =
            "✅ Programa ejecutado";

        mensaje.classList.remove("oculto");

        lanzarConfeti();

    }, 1500);

});
/* ÚLTIMO ARCHIVO */

const botonFinal = document.getElementById("botonFinal");
const final = document.getElementById("final");


botonFinal.addEventListener("click", function () {

    botonFinal.disabled = true;

    botonFinal.textContent =
        "⏳ Abriendo archivo...";


    setTimeout(function () {

        botonFinal.style.display = "none";

        final.classList.remove("oculto");

        final.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        lanzarConfeti();

    }, 1200);

});