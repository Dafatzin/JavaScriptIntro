//Programa para evaluar notas de estudiantes
let calificacion = prompt("Ponga la calificación del estudiante:")
if (calificacion >= 90){
    console.log("Excelente")
}
else if (calificacion >= 75 && calificacion <= 89){
    console.log("Bien")
}
else if (calificacion >= 60 && calificacion <= 74){
    console.log("Calificación Suficiente")
}
else if ( calificacion<=60){
    console.log("Estudiante no aprobado")
}