const container = document.querySelector('.container');
const containerContent = [...document.querySelectorAll('.container > div')];
const stage1 = document.querySelector('.stage1');
const checkbox = document.querySelector('input.checkbox');
const input_email = document.querySelector('input.email');
const btn1 = document.querySelector('.btn1');
const stage2 = document.querySelector('.stage2');
const operation = document.querySelector('em.operation');
const result = document.querySelector('.result');
const btn2 = document.querySelector('.stage2 button');
const stage3 = document.querySelector('.stage3');
const divJours = document.querySelector('.jours');
const btn3 = document.querySelector('.stage3 button');
const stage4 = document.querySelector('.stage4');
const btn4 = document.querySelector('.stage4 button');
const colors = ['cce5ff', 'fff3cd', 'd4edda', 'f8d7da'];
let i = 0;
let resultOfOperation;
const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

// const changer = () => {
//  if (i == colors.length) {
//   i = 0;
//  }
//  let hex = colors[i++];
//  stage1.style.backgroundColor = `#${hex}`;
// }

const final = () => {
 console.log('finish')
}

const go4 = () => {
 stage4.style.visibility = 'visible';
 stage4.style.transform = 'translateY(18rem)';
 stage4.style.transiton = 'all .5s';
 stage4.style.backgroundColor = '#cce5ff';
 stage3.style.backgroundColor = '#d4edda';
 btn4.addEventListener('click', final);
}

const clickDay = function () {
 const day = new Date();
 let numberOfToday = (day.getDay()) - 1;
 const numberChosen = jours.indexOf(this.textContent);
 if (numberOfToday < 0) {
  numberOfToday = 6;
 }
 if (numberOfToday == numberChosen) {
  go4();
 } else {
  console.log(this.textContent, numberChosen, numberOfToday);
 }
}

const joursDeLaDemaine = () => {
 divJours.style.visibility = 'visible';
 for (let i = 0; i < jours.length; i++) {
  const jour = document.createElement('div');
  jour.textContent = `${jours[i]}`;
  jour.addEventListener('click', clickDay)
  divJours.appendChild(jour);
 }
}

const go3 = () => {
 console.log(resultOfOperation)
 if (result.value == resultOfOperation) {
  stage3.style.visibility = 'visible';
  stage3.style.transform = 'translateY(12rem)';
  stage3.style.transiton = 'all .5s';
  stage3.style.backgroundColor = '#cce5ff';
  stage2.style.backgroundColor = '#d4edda';
  // btn3.addEventListener('click', go4);
  result.value = '';
  result.disabled = true;
  joursDeLaDemaine();
 } else {
  stage2.style.backgroundColor = '#f8d7da';
  result.value = '';
 }
}

const go2 = (e) => {
 e.preventDefault();
 if (checkbox.checked && input_email.value != 0) {
  console.log(checkbox.value);
  stage2.style.visibility = 'visible';
  stage2.style.transform = 'translateY(6rem)';
  stage2.style.transiton = 'all .5s';
  stage2.style.backgroundColor = '#cce5ff';
  stage1.style.backgroundColor = '#d4edda';
  input_email.value = '';
  input_email.disabled = true;
  checkbox.disabled = true;

  const number1 = Math.floor(Math.random() * 10);
  const operator = '+';
  const number2 = Math.floor(Math.random() * 10);
  resultOfOperation = number1 + number2;
  operation.textContent = `${number1}${operator}${number2}`;

  btn2.addEventListener('click', go3);
 } else {
  console.log(checkbox.value);
  stage1.style.backgroundColor = '#f8d7da';
  input_email.value = '';
 }
}

const init = () => {
 // containerContent.forEach(stage => stage.style.display = 'none');
 containerContent.forEach(stage => stage.style.visibility = 'hidden');
 stage1.style.top = 0;
 stage1.style.visibility = 'visible';
 stage1.style.backgroundColor = '#cce5ff';
 // stage1.parentNode.style.overflow = 'hidden';
 btn1.addEventListener('click', go2);
}

const yellowIt = function () {
 stage1.style.borderColor = '#fff3cd';
}

init();
// stage1.addEventListener('click', changer);
stage1.addEventListener('click', yellowIt);