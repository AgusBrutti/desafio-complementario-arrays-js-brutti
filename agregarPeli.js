//Pido al usuario que agregue un producto.
const agregarPeli = prompt("Selecciona la película que deseas alquilar: Pelicula 1, Pelicula 2, Pelicula 3, Pelicula 4.");
//Declaro un array de objeto
const productos = [{ id: 1, producto: "Pelicula 1", stock: 4, precio: "400" },
{ id: 1, producto: "Pelicula 2", stock: 2, precio: "700" },
{ id: 1, producto: "Pelicula 3", stock: 1, precio: "1000" },
{ id: 1, producto: "Pelicula 4", stock: 0, precio: "650" }];
//Creo la funcion para validar que exista la película.
function existePeli() {
    for (let pelicula of productos) {
        if (pelicula.producto.toUpperCase() == agregarPeli.toUpperCase()) {
            return true;
        }
    }
    return false;
}
//Llamo a la función, si es true agrega la pelicula sino no.
if (existePeli()){
    alert ("Agregaste la " + agregarPeli);
}else{
    alert("No se encuentra la pelicula.");
}