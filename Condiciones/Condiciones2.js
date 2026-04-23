let Nasa = prompt("¿Deseas entrar a la NASA?").toLowerCase()
if (Nasa == "si"){
    let preg1 = prompt("¿Has visto un ovni?").toLowerCase()
    if (preg1 === "si"){
        console.log("¡Bienvenido a la NASA!")
    }
    else if (preg1 === "no"){
        console.log("¿Entonces para qué quires entrar? Saquese")
    } 
}
else if (Nasa == "no"){
    console.log("Entonces no entres")
}