 document.addEventListener('DOMContentLoaded', () => {

let tabla = document.getElementsByTagName('table')[0];
let botones = document.getElementsByClassName('buttons')[0];
let resultado = document.getElementsByClassName('result')[0];


//boton añadir elemento
let bottonAgregar = document.createElement('div');
bottonAgregar.textContent = 'añadir';
bottonAgregar.style = 'border: 1px solid black';
bottonAgregar.style.height = '30px';
bottonAgregar.style.width = '80px';
bottonAgregar.addEventListener('click', (event) => {
  let cuerpo = document.getElementsByTagName('tbody')[0];
  let nombreAlimento = prompt('introduce el nombre del alimento: ');
  let nuevaFila = document.createElement('tr');
  cuerpo.appendChild(nuevaFila);
  let celdaNombre = document.createElement('td');
  celdaNombre.textContent = nombreAlimento;
  let celdaCalorias = document.createElement('td');
  let input = document.createElement('input');
  input.type = 'text';
  celdaCalorias.appendChild(input)
  nuevaFila.appendChild(celdaNombre);
  nuevaFila.appendChild(celdaCalorias);
});
  botones.appendChild(bottonAgregar);


//boton calcular calorias
//boton calcular calorias
let bottonCalcular = document.createElement('div');
bottonCalcular.textContent = 'calcular calorias';
bottonCalcular.style = 'border: 1px solid black';
bottonCalcular.style.height = '30px';
bottonCalcular.style.width = '80px';
bottonCalcular.addEventListener('click', (event) => {
  let valor = 0;
  var numeroInputs = [];
  var arrayValores = [];
  numeroInputs = document.getElementsByTagName('input').length;
for (let i = 0; i < numeroInputs; i++) {
  valor = document.getElementsByTagName('input')[i].value;
  arrayValores.push(valor)
  console.log(arrayValores)
}

let parrafoResultado = document.createElement('p')
parrafoResultado.class = 'parrafoResultado';
parrafoResultado.textContent = '';
resultado.appendChild(parrafoResultado);
})
botones.appendChild(bottonCalcular);

//boton vaciar
let bottonVaciar = document.createElement('div');
bottonVaciar.textContent = 'vaciar';
bottonVaciar.style = 'border: 1px solid black';
bottonVaciar.style.height = '30px';
bottonVaciar.style.width = '80px';
botones.appendChild(bottonVaciar);
bottonVaciar.addEventListener('click', (event) => {
let cuerpo = document.getElementsByTagName('tbody')[0];
cuerpo.remove();
//resultado.remove();
let cuerpoNuevo = document.createElement('tbody');
tabla.appendChild(cuerpoNuevo);
//let nuevoResultado = document.createElement('div');
//nuevoResultado.className = 'result';
//document.body.appendChild(nuevoResultado);
})
});
