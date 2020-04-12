document.addEventListener('DOMContentLoaded', () => {

let tabla = document.getElementsByTagName('table')[0];
let botones = document.getElementsByClassName('buttons')[0];
//boton añadir elemento
let bottonAgregar = document.createElement('div');
bottonAgregar.textContent = 'añadir';
bottonAgregar.style = 'border: 1px solid black';
bottonAgregar.style.height = '30px';
bottonAgregar.style.width = '80px';
bottonAgregar.addEventListener('click', (event) => {
  let cuerpo = document.createElement('tbody');
  tabla.appendChild(cuerpo);
  let nombreAlimento = prompt('introduce el nombre del alimento: ');
  let calorias = prompt('introduce las calorias del alimento: ');
  let nuevaFila = document.createElement('tr');
  cuerpo.appendChild(nuevaFila);
  let celdaNombre = document.createElement('td');
  celdaNombre.textContent = nombreAlimento;
  let celdaCalorias = document.createElement('td');
  celdaCalorias.textContent = calorias;
  nuevaFila.appendChild(celdaNombre);
  nuevaFila.appendChild(celdaCalorias);
});
  botones.appendChild(bottonAgregar);

//boton calcular calorias
let bottonCalcular = document.createElement('div');
bottonCalcular.textContent = 'calcular calorias';
bottonCalcular.style = 'border: 1px solid black';
bottonCalcular.style.height = '30px';
bottonCalcular.style.width = '80px';
bottonCalcular.addEventListener('click', (event) => {

})
botones.appendChild(bottonCalcular);

//boton vaciar
let bottonVaciar = document.createElement('div');
bottonVaciar.textContent = 'vaciar';
bottonVaciar.style = 'border: 1px solid black';
bottonVaciar.style.height = '30px';
bottonVaciar.style.width = '80px';
botones.appendChild(bottonvaciar);
bottonvaciar.addEventListener('click', (event) => {
let cuerpo = document.getElementsByTagName('tbody')[0];
cuerpo.remove();
})

});
