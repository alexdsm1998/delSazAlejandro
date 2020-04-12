document.addEventListener('DOMContentLoaded', () => {

let cuerpo = document.getElementsByTagName('tbody')[0]
let botones = document.getElementsByClassName('buttons')[0]
//boton añadir elemento
let bottonañadir = document.createElement('div')
bottonañadir.textContent = 'añadir'
bottonañadir.style = 'border: 1px solid black'
bottonañadir.style.height = '30px'
bottonañadir.style.width = '80px'
bottonañadir.addEventListener('click', (event) => {
  let nombre_alimento = prompt('introduce el nombre del alimento: ')
  let calorias = prompt('introduce las calorias del alimento: ')
  let nueva_fila = document.createElement('tr')
  cuerpo.appendChild(nueva_fila)
  let celda_nombre = document.createElement('td')
  celda_nombre.textContent = nombre_alimento;
  let celda_calorias = document.createElement('td')
  celda_calorias.textContent = calorias;
  nueva_fila.appendChild(celda_nombre)
  nueva_fila.appendChild(celda_calorias)
});
  botones.appendChild(bottonañadir)

//boton calcular calorias
let bottoncalcular = document.createElement('div')
bottoncalcular.textContent = 'calcular calorias'
bottoncalcular.style = 'border: 1px solid black'
bottoncalcular.style.height = '30px'
bottoncalcular.style.width = '80px'
bottoncalcular.addEventListener('click', (event) => {

})
botones.appendChild(bottoncalcular)

//boton vaciar
let bottonvaciar = document.createElement('div')
bottonvaciar.textContent = 'vaciar'
bottonvaciar.style = 'border: 1px solid black'
bottonvaciar.style.height = '30px'
bottonvaciar.style.width = '80px'
botones.appendChild(bottonvaciar)
bottonvaciar.addEventListener('click', (event) => {
cuerpo.remove();
})

});
