var listaDeFrutas=[];

function agregarFruta(fruta){
  var fruta = document.getElementById('ingresarFruta').value;
  listaDeFrutas.push(fruta);
  console.log(listaDeFrutas);

  //alert(fruta);
  var listaOrdenada=document.getElementById("escribir");
  console.log(listaOrdenada);
  var elemento =document.createElement('LI');

  elemento.innerHTML = ingresarFruta.value;
  listaOrdenada.appendChild(elemento);
}
