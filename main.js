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
// let i = 0;
let flag = false;
let resultOfOperation;
const jours = [{
 jour: 'lundi',
 nombre: 1
}, {
 jour: 'mardi',
 nombre: 2
}, {
 jour: 'mercredi',
 nombre: 3
}, {
 jour: 'jeudi',
 nombre: 4
}, {
 jour: 'vendredi',
 nombre: 5
}, {
 jour: 'samedi',
 nombre: 6
}, {
 jour: 'dimanche',
 nombre: 7
}, ];

// const changer = () => {
//  if (i == colors.length) {
//   i = 0;
//  }
//  let hex = colors[i++];
//  stage1.style.backgroundColor = `#${hex}`;
// }

const final = () => { // to console.log
 console.log('finish')
}

const go4 = () => { // start lats stage
 stage4.style.visibility = 'visible';
 stage4.style.transform = 'translateY(21rem)';
 stage4.style.transiton = 'all .5s';
 stage4.style.backgroundColor = '#cce5ff';
 stage3.style.backgroundColor = '#d4edda';
 btn4.addEventListener('click', final);
}

const clickDay = function () { // get data from clicked jours and compares it with the numer of today
 const day = new Date();
 const numberOfToday = (day.getDay());
 // const numberChosen = jours.indexOf(this.textContent); // whet it was just a string
 let numberChosen = jours.find(nombre => nombre.jour === this.textContent);
 // let numberChosen = jours.filter(nombre => { // first try, too complicated
 //  return nombre.jour === this.textContent
 // });
 numberChosen = numberChosen.nombre;
 if (numberOfToday == 0) {
  numberOfToday = 7;
 }
 if (numberOfToday == numberChosen) {
  go4(); // success!
 } else {
  console.log(this.textContent, numberChosen, numberOfToday);
 }
}

const joursDeLaDemaine = () => { // creates clickable list, order should be randomized
 divJours.style.visibility = 'visible';
 for (let i = 0; i < jours.length; i++) {
  const jourDiv = document.createElement('div');
  jourDiv.textContent = `${jours[i]['jour']}`;
  jourDiv.addEventListener('click', clickDay)
  divJours.appendChild(jourDiv);
 }
}

const go3 = () => {
 console.log(resultOfOperation)
 if (result.value == resultOfOperation) {
  stage3.style.visibility = 'visible';
  stage3.style.transform = 'translateY(15rem)';
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

// "Email Validation Rules" http://rumkin.com/software/email/rules.php
const mailValidation = () => {
 let mailString = input_email.value.split('@');
 if (mailString[0].length == 0 || mailString[2]) return;
 mailString = mailString[1].split('.');
 mailString = mailString[mailString.length - 1].toLowerCase()
 for (let i = 0; i < mailString.length; i++) {
  if (!mailString[i].match(/[a-z]/i)) {
   return;
  }
 }
 flag = true;
}

const go2 = (e) => {
 e.preventDefault();
 mailValidation();
 if (checkbox.checked && flag) {
  console.log(checkbox.value);
  stage2.style.visibility = 'visible';
  stage2.style.transform = 'translateY(9rem)';
  stage2.style.transiton = 'all .5s';
  stage2.style.backgroundColor = '#cce5ff';
  stage1.style.backgroundColor = '#d4edda';
  input_email.value = '';
  input_email.disabled = true;
  checkbox.disabled = true;

  const number1 = Math.floor(Math.random() * 10);
  const operator = '+'; // should be randomized
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