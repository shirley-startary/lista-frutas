var listaDeFrutas=[];

function agregarFruta(fruta){
  var fruta = document.getElementById('ingresarFruta').value;
  listaDeFrutas.push(fruta);
  console.log(fruta);
  console.log(listaDeFrutas);

  //alert(fruta);
  var listaOrdenada=document.getElementById("lista");
  console.log(listaOrdenada);
  var elemento =document.createElement('LI');

  elemento.innerHTML = fruta;
  listaOrdenada.appendChild(elemento);
  document.getElementById("ingresarFruta").value="";
}

function removerFruta(){
  var elemento = document.getElementById("lista");
  //var longitud =elemento.length;  en el depurador me salia undefined. y ahi mismo vi que childElementCount me contaa la cantidad de elementos li
  var longitud = elemento.childElementCount;  //cuenta la cantidad de elementos hijos.
  console.log(longitud);
  console.log(elemento);
  elemento.removeChild(elemento.children[longitud-1]); // utilice children porque con childNodes me contaba el texto como elementos.s
}
