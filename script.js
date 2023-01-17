'use strict';

// Reset counter and page to white
// Count the number of clicks

let random = Math.trunc(Math.random() * 10) + 1;
let counter = 0;

// Changes page color
document.querySelector('.color').addEventListener('click', function () {
    if (random === 1) {
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.name').textContent = "Red";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    } else if (random === 2) {
        document.querySelector('body').style.backgroundColor = "blue";
        document.querySelector('.name').textContent = "Blue";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    } else if (random === 3) {
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.name').textContent = "Green";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    } else if (random === 4) {
        document.querySelector('body').style.backgroundColor = "orange";
        document.querySelector('.name').textContent = "Orange";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    } else if (random === 5) {
        document.querySelector('body').style.backgroundColor = "gold";
        document.querySelector('.name').textContent = "Gold";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    } else if (random === 6) {
        document.querySelector('body').style.backgroundColor = "brown";
        document.querySelector('.name').textContent = "Brown";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    } else if (random === 7) {
        document.querySelector('body').style.backgroundColor = "yellow";
        document.querySelector('.name').textContent = "Yellow";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    } else if (random === 8) {
        document.querySelector('body').style.backgroundColor = "purple";
        document.querySelector('.name').textContent = "Purple";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    } else if (random === 9) {
        document.querySelector('body').style.backgroundColor = "#FABA5F";
        document.querySelector('.name').textContent = "Rajah";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    } else if (random === 10) {
        document.querySelector('body').style.backgroundColor = "#EC9706";
        document.querySelector('.name').textContent = "Honey";
        random = Number(Math.trunc(Math.random() * 10) + 1);
        counter++
    }
    document.querySelector('.counter').textContent = counter;
});


// Resets page
document.querySelector('.reset').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('.name').textContent = "Color Name";
    counter = 0;
    document.querySelector('.counter').textContent = 0;
});
