// const numbers = '1,3,5,3,7,9';

// const stringyNumbers = numbers.split(',');

// console.log(stringyNumbers);

// const integer = stringyNumbers.map(element => parseInt(element));

// console.log(integer);

// [jedan,tri] = integer;

// console.log(jedan);



// const personalInfo = {
//     firstName: 'Stipe',
//     lastName: 'Mesic',
//     birthDate: '09.12.1892',
//     oib: 123123123,
//     adress: 'Pantovcak 22'

// }

// const fullName = `${personalInfo.firstName} ${personalInfo.lastName}`;

// console.log(fullName);


// const {firstName,lastName} = personalInfo;

// const fullName2 = `${firstName} ${lastName}`;
// console.log(fullName2);

// const {birthDate,adress} = personalInfo;

// const birthAdress = `${birthDate} ${adress}`
// console.log(birthAdress);

// const formInput = document.querySelector('#number');
// const btnSubmit = document.querySelector('#button');



// function square(value){
//     return value**2;
// }

// formInput.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     const x = document.querySelector('#formica').value;
//     const squared = square(x);
//     console.log(squared);
//     const resultElements = document.querySelector('#result');

//     resultElements.innerText = `Kvadrat broja ${x} je ${squared}`;
// })


//hipotenuza

const hipoForm = document.querySelector('#hipoForm');


function hipo(a,b) {
    const kvadrat = (a*a)+(b*b);
    for (let i = 0; i < kvadrat; i++) {
        if (kvadrat/i===i) {
            return i;
        }
    }
    
}

hipoForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const prvaKateta = document.querySelector('#a').value;
    const drugaKateta = document.querySelector('#b').value;
    const hipoed = hipo(prvaKateta,drugaKateta);
    const resultHipo = document.querySelector('#hipotenuza');
    resultHipo.innerText = `Duljina hipotenuze: ${hipoed}`

})

//valuta
fetch("https://cors-anywhere.herokuapp.com/https://api.hnb.hr/tecajn-eur/v3?valuta=EUR")
  .then(response => response.json())
  .then(data => {
    if(data.tecaj){
        let rate = data.tecaj.replace(",",".");
        rate = parseFloat(rate);
        console.log(`The central rate for USD is: ${rate}`);
    }else{
        console.log("The central rate is not available")
    }
  })
  .catch(error => console.log(error));



const valutaForm = document.querySelector('#valutaForm');

function valuta(x) {
    return x * 7.5345;

}

valutaForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const valutaHrk = document.querySelector('#x').value;
    const valuted = valuta(valutaHrk);
    const resultValuta = document.querySelector('#valuta');
    resultValuta.innerText = `${valutaHrk} HRK = $${valuted}`
})