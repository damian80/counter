const counter = document.querySelector('.counter');
const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');

let count= 0;

addCount.addEventListener('click',increaseCounter);
lowerCount.addEventListener('click', decreaseCounter);

function increaseCounter(){
    count++;
    counter.innerHTML=count;
if(counter.innerHTML>'0'){
    counter.style.color='#4caf50';
}
else if (counter.innerHTML==='0'){
    counter.style.color = 'white';
}
counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
{duration:500,fill:'forwards'});
}
function decreaseCounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = 'red';
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }],
    { duration:500, fill: 'forwards' });
}