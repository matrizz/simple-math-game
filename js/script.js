const input = document.getElementById('inpt')
const resposta = document.getElementById('y-n')
const False = document.getElementById('0');
const True = document.getElementById('1');
const h1 = document.getElementById('pergunta');
const h3 = document.getElementById('numPoint')
var display;
var randomSoma, randomSub, randomDiv, randomMulti;
var points = 0;
var initialPoint = 0;
h3.innerHTML = initialPoint;


//----------------------get random numbers, and print on screen-----------------------//

function getNumbers() {getRandomSoma(), getRandomSubtracao(), getRandomDivisao(), getRandomMultiplicacao();
display = (`${randomSoma} x ${randomSub}`);
h1.innerText = display;
}

getNumbers()

function getRandomSoma() { randomSoma = Math.floor(Math.random() * 100) };
function getRandomSubtracao() { randomSub = Math.floor(Math.random() * 50) };
function getRandomDivisao() { randomDiv = Math.floor(Math.random() * 100) };
function getRandomMultiplicacao() { randomMulti = Math.floor(Math.random() * 50) };

//--------------test if is true or false-------------//



function testQuest() {
    var result = parseInt(input.value);
    
    if (result === randomSoma*randomSub) { resposta.innerText = 'correto'; pontuationP(); getNumbers() }
    
    else { resposta.innerText = 'errado'; pontuationN() }
}

//-----------------------pontuação------------------//

function pontuationP() {
    if (points === 0) { points = points + 2; h3.innerHTML = points}
    else { points = points + 2; h3.innerHTML = points }
}

function pontuationN() {
    if (points === 0) { h3.innerHTML = 0 }
    else { points = points - 1; h3.innerHTML = points; }
}

















/*matrizz*/
