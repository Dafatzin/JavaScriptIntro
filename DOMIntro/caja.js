let caja = document.getElementById("Caja");
let enviar = document.getElementById("Enviar");
let comentarios = document.getElementById("Comentarios");
let eliminar = document.getElementById("Eliminar");
let contador = 0;
function enviarComentario(){
    if(caja.value.trim() ==="" ){
        alert("Por favor, escribe un comentario.");
       return;
    } 
    contador++;
    let card = document.createElement("div");
    card.classList.add("card-comentario");
    card.innerHTML = "<p class='meta'>Comentario #" + contador + "</p><p>" + caja.value + "</p>";
    comentarios.appendChild(card);
    caja.value = "";
}
function eliminarComentarios(){
    if(comentarios.lastElementChild){
        comentarios.removeChild(comentarios.lastElementChild);
        contador--;
    } else {
        alert("No hay comentarios para eliminar.");
    }
}
enviar.addEventListener("click", enviarComentario);
eliminar.addEventListener("click", eliminarComentarios);