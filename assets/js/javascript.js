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
}
