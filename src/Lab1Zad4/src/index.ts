import { Counter } from './Counter';

const counter = new Counter();
const buttonAdd = document.createElement('button');
buttonAdd.innerText = '+';
buttonAdd.addEventListener('click', () => {
    counter.increase();
    divCounter.innerText = counter.getCount();
});
const buttonSub = document.createElement('button');
buttonSub.innerText = '-';
buttonSub.addEventListener('click', () => {
    counter.decrease();
    divCounter.innerText = counter.getCount();
});
const divCounter = document.createElement('div');
divCounter.innerText = counter.getCount();
divCounter.style.textAlign = 'center';
divCounter.style.fontSize = '30px';
document.body.append(divCounter);
document.body.append(buttonAdd);
document.body.append(buttonSub);
