window.addEventListener('scroll', function (){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


// menu-button
const menuBtn = document.querySelector('#menu-button');
const menuBox = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('#close-button');

menuBtn.addEventListener('click', () => {
    menuBox.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    menuBox.style.display = 'none';
});


// cart-button 
const cartBtn = document.querySelector('#bag-button');
const cartBox = document.querySelector('#bag-container');
const closeCartBtn = document.querySelector('#cart-close-button');

cartBtn.addEventListener('click', () => {
    cartBox.style.display = 'block';
});

closeCartBtn.addEventListener('click', () => {
    cartBox.style.display = 'none';
});