const Libro1 = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    Publicacion: 1943,
    Estado: "Disponible",
    mostrarInfo:function(){
    const div = document.getElementById("info-Libro1");
    if(div.innerHTML !== ""){
        div.innerHTML = ""; 
        return;}
    div.innerHTML = "Título: " + this.titulo + "<br>" + "Autor: " + this.autor +
    "<br>" + "Publicación: " + this.Publicacion + "<br>" + "Estado: " + this.Estado;
    
    }
}
const Libro2 = {
    titulo:"El Alquimista",
    autor: "Paulo Coelho",
    Publicacion: 1988,
    Estado: "Prestado",
    mostrarInfo:function(){
    const div = document.getElementById("info-Libro2");
     if(div.innerHTML !== ""){
        div.innerHTML = ""; 
        return;}
    div.innerHTML = "Título: " + this.titulo + "<br>" + "Autor: " + this.autor +  "<br>" + "Publicación: " 
        + this.Publicacion + "<br>" + "Estado: " + this.Estado;
    }
}
const Libro3 = {
    titulo: "La Ladrona de Libros",
    autor: "Markus Zusak",
    Publicacion: 2005,
    Estado: "Disponible",
    mostrarInfo:function(){
    const div = document.getElementById("info-Libro3");
     if(div.innerHTML !== ""){
        div.innerHTML = ""; 
        return;}
    div.innerHTML = "Título: " + this.titulo + "<br>" + "Autor: " + this.autor +  "<br>" + "Publicación: " 
        + this.Publicacion + "<br>" + "Estado: " + this.Estado;
    }
}
