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
})