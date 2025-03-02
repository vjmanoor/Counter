const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

const countLabel = document.getElementById('myCounter');

let count = 0;

increaseBtn.onclick = function(){
    count+=1;
    countLabel.textContent = count
}

decreaseBtn.onclick = function(){
    count-=1;
    countLabel.textContent = count
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count
}