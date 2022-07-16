// //Declaro array de objetos
// const productos = [{ id: 1, producto: "Pelicula 1", stock: 4, precio: "400" },
// { id: 1, producto: "Pelicula 2", stock: 2, precio: "700" },
// { id: 1, producto: "Pelicula 3", stock: 1, precio: "1000" },
// { id: 1, producto: "Pelicula 4", stock: 0, precio: "650" }];
// //Recorro el array
// for (const pelicula of productos) {
//     alert("id: " + pelicula.id + ", peli: " + pelicula.producto + ", Stock: " + pelicula.stock + ", precio: $" + pelicula.precio);
//     const tenemosStock = validarStock(pelicula.stock);
// }
// //Creo una función para validar si hay stock
// function validarStock(tenemosStock) {
//     if (tenemosStock > 0) {
//         return alert("Hay stock");
//     } else {
//         return alert("No hay stock");
//     }
// }