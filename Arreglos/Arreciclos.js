let frutas = ["Manzana", "Mamey", "Pera","Fresas", "Lima","Coco"]
let Manzana = {
    color: "Rojo",
    Cantidad: 20,
    Precio: 10
}
let Mamey = {
    color: "Café",
    Cantidad: 12,
    Precio: 60
}
let Pera = {
    color: "Verde",
    Cantidad: 25,
    Precio: 20
}
let Fresas = {
    color: "Rojo",
    Cantidad: 80,
    Precio: 12
}
let Lima = {
    color: "Verde",
    Cantidad: 24,
    Precio: 74
}
let Coco = {
    color: "Café",
    Cantidad: 28,
    Precio: 50,
}
let i = 0
while(i < frutas.length){
    console.log(frutas[i])
    i++
}
let CantidadTotal = Manzana.Cantidad + Mamey.Cantidad + Pera.Cantidad + Fresas.Cantidad + Lima.Cantidad + Coco.Cantidad
    console.log("Cantidad total de frutas: " + CantidadTotal)
// Comprar Manzanas
let compraManzana = prompt("¿Cuantas Manzanas llevara?")

if(compraManzana > 0 && compraManzana <= Manzana.Cantidad){
    let precioManzana = compraManzana * Manzana.Precio
    console.log("El precio de la manzana es: " + precioManzana)
}
else if(compraManzana > Manzana.Cantidad){
    console.log("No hay suficientes manzanas")
}
else{
    console.log("No se ha realizado la compra")
}
// Comprar Mamey
let compraMamey = prompt("¿Cuantos Mameys llevara?")

if(compraMamey > 0 && compraMamey <= Mamey.Cantidad){
    let precioMamey = compraMamey * Mamey.Precio
    console.log("El precio del mamey es: " + precioMamey)
}
else if(compraMamey > Mamey.Cantidad){
    console.log("No hay suficientes mameys")
}
else{
    console.log("No se ha realizado la compra")
}
// Comprar Peras
let compraPera = prompt("¿Cuantas Peras llevara?")

if(compraPera > 0 && compraPera <= Pera.Cantidad){
    let precioPera = compraPera * Pera.Precio
    console.log("El precio de la pera es: " + precioPera)
}
else if(compraPera > Pera.Cantidad){
    console.log("No hay suficientes peras")
}
else{
    console.log("No se ha realizado la compra")
}
// Comprar Fresas
let compraFresas = prompt("¿Cuantas Fresas llevara?")

if(compraFresas > 0 && compraFresas <= Fresas.Cantidad){
    let precioFresas = compraFresas * Fresas.Precio
    console.log("El precio de las fresas es: " + precioFresas)
}
else if(compraFresas > Fresas.Cantidad){
    console.log("No hay suficientes fresas")
}
else{
    console.log("No se ha realizado la compra")
}
// Comprar Limas
let compraLima = prompt("¿Cuantas Limas llevara?")

if(compraLima > 0 && compraLima <= Lima.Cantidad){
    let precioLima = compraLima * Lima.Precio
    console.log("El precio de la lima es: " + precioLima)
}
else if(compraLima > Lima.Cantidad){
    console.log("No hay suficientes limas")
}
else{
    console.log("No se ha realizado la compra")
}
// Comprar Cocos
let compraCoco = prompt("¿Cuantos Cocos llevara?")

if(compraCoco > 0 && compraCoco <= Coco.Cantidad){
    let precioCoco = compraCoco * Coco.Precio
    console.log("El precio del coco es: " + precioCoco)
}
else if(compraCoco > Coco.Cantidad){
    console.log("No hay suficientes cocos")
}
else{
    console.log("No se ha realizado la compra")
}