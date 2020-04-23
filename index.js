document.addEventListener('DOMContentLoaded', () => {

    let tabla = document.getElementsByTagName('table')[0];
    let botones = document.getElementsByClassName('buttons')[0];
    let resultado = document.getElementsByClassName('result')[0];



    //boton añadir elemento
    let bottonAgregar = document.createElement('button');
    bottonAgregar.textContent = 'añadir';
    bottonAgregar.addEventListener('click', (event) => {
        let cuerpo = document.getElementsByTagName('tbody')[0];
        let nombreAlimento = prompt('introduce el nombre del alimento: ');
        while (nombreAlimento == '') {
            alert('no puedes dejar este espacio en blanco')
            nombreAlimento = prompt('introduce el nombre del alimento: ');
        }
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
    let bottonCalcular = document.createElement('button');
    bottonCalcular.textContent = 'calcular calorias';
    bottonCalcular.addEventListener('click', (event) => {
        let valor = '';
        var numeroInputs = [];
        var arrayValores = [];
        numeroInputs = document.getElementsByTagName('input').length;
        for (let i = 0; i < numeroInputs; i++) {
            valor = document.getElementsByTagName('input')[i].value;
            if (valor[i] == '') {
                alert('Debe indicar las calorías de todos los alimentos para poder realizar el cálculo');
            } else {
                let valorInt = parseInt(valor);
                arrayValores.push(valorInt)
            }
        }
        let total = arrayValores.reduce((a, b) => a + b, 0);
        if (isNaN(total) == true) {
            alert('no puedes dejar campos en blanco')
        } else {
                let parrafoResultado = document.createElement('h1')
                parrafoResultado.style = 'text-align: center';
                parrafoResultado.textContent = total + ' calorias';
                resultado.appendChild(parrafoResultado);
        }
    })
    botones.appendChild(bottonCalcular);

    //boton vaciar
    let bottonVaciar = document.createElement('button');
    bottonVaciar.textContent = 'vaciar';
    botones.appendChild(bottonVaciar);
    bottonVaciar.addEventListener('click', (event) => {
        let cuerpo = document.getElementsByTagName('tbody')[0];
        cuerpo.remove();
        let cuerpoNuevo = document.createElement('tbody');
        tabla.appendChild(cuerpoNuevo);
        resultado.textContent = '';
    })
});
