var listaDeFrutas=[];
function agregarFruta(fruta){
  var fruta = document.getElementById('ingresarFruta').value;
  listaDeFrutas.push(fruta);
  console.log(listaDeFrutas);
  document.write(listaDeFrutas);
  alert(fruta);
}
