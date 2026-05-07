let contraseña = document.getElementById("Contraseña");
const copiar = document.querySelector("#Contraseña img");
let longitud = document.querySelector("#Longitud input[type='range']");
let cond1 = document.getElementById("Condición1");
let cond2 = document.getElementById("Condición2");
let cond3 = document.getElementById("Condición3");
let cond4 = document.getElementById("Condición4");
let generar = document.getElementById("Generar");
let relleno = document.getElementById("Relleno");


const charMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charMinusculas = "abcdefghijklmnopqrstuvwxyz";
const charNumeros = "0123456789";
const charSimbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

longitud.min = 8;
longitud.max = 20;
longitud.value = 8;

let opciones = {
    mayusculas: false,
    minusculas: false,
    numeros: false,
    simbolos: false
};

cond1.addEventListener("click", () => toggle("mayusculas", cond1, "Cuadrado1"));
cond2.addEventListener("click", () => toggle("minusculas", cond2, "Cuadrado2"));
cond3.addEventListener("click", () => toggle("numeros",    cond3, "Cuadrado3"));
cond4.addEventListener("click", () => toggle("simbolos",   cond4, "Cuadrado4"));
function toggle(tipo, elemento, clase) {
    opciones[tipo] = !opciones[tipo];
    const cuadrado = elemento.querySelector(`.${clase}`);
    cuadrado.style.backgroundColor = opciones[tipo] ? "#FF4500" : "transparent";
}
//Contraseña Inicio
generar.addEventListener("click", () => {
    let caracteres = "";

    if (opciones.mayusculas) caracteres += charMayusculas;
    if (opciones.minusculas) caracteres += charMinusculas;
    if (opciones.numeros)    caracteres += charNumeros;
    if (opciones.simbolos)   caracteres += charSimbolos;
    if (caracteres === "") {
        caracteres = charMayusculas + charMinusculas + charNumeros + charSimbolos;
    }
    const largo = parseInt(longitud.value);
    let resultado = "";
    for (let i = 0; i < largo; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[indice];
    }

    let span = document.getElementById("textoContrasena");
    if (!span) {
        span = document.createElement("span");
        span.id = "textoContrasena";
        span.style.cssText = "color:white; font-family:'Quicksand',sans-serif; align-self:center; margin-left:16px;letter-spacing:10px;";
        contraseña.insertBefore(span, copiar);
    }
    span.textContent = resultado;
    longitud.value = resultado.length;
    //Resutlado final
    marcarCuadrados(resultado);
     actualizarMedidor(resultado);
});
//Marcar los cuadrados
function marcarCuadrados(pass) {
    const checks = [
        { cuadrado: document.querySelector(".Cuadrado1"), tiene: /[A-Z]/.test(pass) },
        { cuadrado: document.querySelector(".Cuadrado2"), tiene: /[a-z]/.test(pass) },
        { cuadrado: document.querySelector(".Cuadrado3"), tiene: /[0-9]/.test(pass) },
        { cuadrado: document.querySelector(".Cuadrado4"), tiene: /[^A-Za-z0-9]/.test(pass) },
    ];

    checks.forEach(({ cuadrado, tiene }) => {
        cuadrado.style.backgroundColor = tiene ? "#FF4500" : "transparent";
    });
}

function actualizarMedidor(pass) {
    let puntos = 0;

    if (pass.length >= 8)  puntos++;
    if (pass.length >= 16) puntos++;
    if (/[A-Z]/.test(pass)) puntos++;
    if (/[a-z]/.test(pass)) puntos++;
    if (/[0-9]/.test(pass)) puntos++;
    if (/[^A-Za-z0-9]/.test(pass)) puntos++;

    let nivel, color, ancho;

    if (puntos <= 2) {
        nivel = "Fácil";
        color = "red";
        ancho = "33%";
    } else if (puntos <= 4) {
        nivel = "Media";
        color = "orange";
        ancho = "66%";
    } else {
        nivel = "Difícil";
        color = "limegreen";
        ancho = "100%";
    }
    relleno.style.height          = "100%";
     relleno.style.width           = ancho;
    relleno.style.backgroundColor = color;
    relleno.style.transition      = "width 0.4s ease, background-color 0.4s ease";

     relleno.textContent    = nivel;
    relleno.style.color    = "white";
    relleno.style.fontSize = "12px";
    relleno.style.display  = "flex";
    relleno.style.alignItems   = "center";
    relleno.style.paddingLeft  = "8px";
    relleno.style.fontFamily   = "'Quicksand', sans-serif";
}
copiar.addEventListener("click", () => {
    const span = document.getElementById("textoContrasena");
    if (!span || span.textContent === "") {
        alert("Primero genera una contraseña.");
        return;
    }
    navigator.clipboard.writeText(span.textContent)
        .then(() => alert("¡Contraseña copiada!"))
        .catch(() => alert("No se pudo copiar."));
});
