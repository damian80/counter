const counter = document.querySelector('.counter');
const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');

let count= 0;

addCount.addEventListener('click',increaseCounter);
lowerCount.addEventListener('click', decreaseCounter);
