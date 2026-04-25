//Hecho por Atzin S
let LibrosLeidos = []
function agregarLibro(){
    let input = document.getElementById("tituloLibro")
    let titulo = input.value
    console.log("Agrega el Libro que hayas leído: " + titulo)
    LibrosLeidos.push(titulo)
    //Sirve para limpiar despúes de agregar el libro
    input.value = ""
}
function mostrarLibrosLeidos(){
    let lista = document.getElementById("listaLibros")
    //Limpia y Actualiza lo que se muestra
    lista.innerHTML = ""

    console.log("Los libos que has leído son: ")
    for (let i = 0; i < LibrosLeidos.length; i ++){
        let li = document.createElement("li")
        li.textContent = LibrosLeidos[i]
        console.log(LibrosLeidos[i])
        lista.appendChild(li)
    }
}
function EliminarLibro(){
    LibrosLeidos.pop()
    mostrarLibrosLeidos()
}