#Leccion 14
1. Primero se diseño la pagina en donde tendra un titulo y una imagen y el respectivo catalogo de frutas.
2. Añadimos el formulario en donde se prodra ingresar mas frutas al catalogo, y por supuesto un boton el cual invocara a la funcion agregarfruta()
3. Dentro de la función extraemos el valor del input y lo pasamos a una variable.
4. Luego obtenemos una referencia a la lista para luego añadimos un elemento mediante el metodo getElementById("lista")
5. creamos el elemento dentro de la lista Ordenada y le añadimos el texto de la variable fruta el cual usamos el la funcion createElement y el metodo innerHTML.
6. y por ultimo añadimos el elemento  creado a la lista y usamos el metodo appendChild(elemento).

7. se añadió un boton al html, para remover Fruta el cual invoca a la funcion removerFruta().
8. dentro de la funcion removerFruta se creo una variable elemento donde se pasa la lista por medio de su Id
9. luego se creo otra variable longitud y se utiliza la propiedad childElementCount para que cuente los elementos total de la lista (elementos LI).
10. y por ultimo utilizamos la funcion removeChild para eliminar el ultimo elemento de la lista.

*nota-en algun momento pensaba hacerlo por medio de un arreglo para poder guardar las frutas, pero aun necesito acentar bien la idea.
}
