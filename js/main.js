const tarjeta = document.querySelector('#tarjeta'), 
bntAbrirformulario = document.querySelector('#btn-abrir-formulario'),
formulario = document.querySelector('#grid-container'),
selectMes = document.querySelector('#selectmes'),
selectYear = document.querySelector('#selectyear'),
inputnumber = document.querySelector('#inputNumero'),
frontNumber = document.querySelector('.numero'),
frontName = document.querySelector('.nombre'),
LogoT = document.querySelector('#logo-marca'),
inputName = document.querySelector('#inputname'),
Firma = document.querySelector('.firma p'),
mesExpiration = document.querySelector('.mes'),
mesYear = document.querySelector('.year'),
ccv = document.querySelector('.ccv-1'),
ccV = document.querySelector('#ccv-3');


// volteamos la tarjeta para mostrar el frente
const mostrarFrente = () => {
if(tarjeta.classList.contains('active'))
tarjeta.classList.remove('active');
}

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

bntAbrirformulario.addEventListener('click', () => {
    bntAbrirformulario.classList.toggle('active');
    formulario.classList.toggle('active')
});

for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	selectMes.appendChild(opcion);
}

const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	selectYear.appendChild(opcion);
}

//* input numero de tarjeta
    inputnumber.addEventListener('keyup', (e) => {
    let valorInput  = e.target.value;

    inputnumber.value = valorInput
//* eliminamos espacios en blanco opcion de barra espaciadora
    .replace(/\s/g, '')
//* eliminar las letras
    .replace(/\D/g, '')
//* ponemos espacio cada 4 numeros
    .replace(/([0-9]{4})/g, '$1 ')
//*elimina el ultimo espaciado
    .trim();

    
    frontNumber.textContent = valorInput;
    
    if(valorInput == ''){
        frontNumber.textContent = '#### #### #### ####';

        LogoT.innerHTML = '';
    }

    if(valorInput[0] == 4){
        LogoT.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '/img/visa1.png';
        LogoT.appendChild(imagen);
    } else if(valorInput[0] == 5){
        LogoT.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '/img/mastercard.png';
        LogoT.appendChild(imagen);
    }

// volteamos la tarjeta para que el usuario vea el frente
    mostrarFrente();
    });
    //nombre de tarjeta
    inputName.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    inputName.value = valorInput.replace(/[0-9]/g, '');
    frontName.textContent = valorInput;
    Firma.textContent = valorInput;
});

//* select mes 

    selectMes.addEventListener('change', (e) => {
    mesExpiration.textContent = e.target.value;
    mostrarFrente();
    
});

//* select year
selectYear.addEventListener('change', (e) => {
    mesYear.textContent = e.target.value.slice(2);
    mostrarFrente();
    
});

ccV.addEventListener('keyup', () => {
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }

    ccv.textContent = ccV.value

})