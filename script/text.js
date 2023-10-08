import {cart, addToCart } from "../script/cart.js";
import {products, bestProducts} from "../script/data.js";

// Make header sticky upon scroll
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


// Generate the BEST SELLER section products into HTML
let bestProductsHTML = '';

bestProducts.forEach((bestProducts) => {
    bestProductsHTML += `
        <div class="product-container">
            <div class="img-container">
                <img src="styles/pictures/${bestProducts.name}.png" alt="">
            </div>
            <div class="description-container">
                <h3>${bestProducts.name}</h3>
                <p>₱${bestProducts.price}</p>
                <button id="add-to-cart" data-product-name="${bestProducts.name}">
                    Add to bag
                    </button>
            </div>        
        </div>
    `;
})

document.querySelector('.best-sellers-container')
    .innerHTML = bestProductsHTML;

// Generate the SHOP section products into HTML

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
            <div class="img-container">
                <img src="styles/shop-pictures/${product.name}.png" alt ="">
            </div>
            <div class="description-container">
                <h4>${product.name}</h4>
                <p>₱${product.price}</p>
                <button id="add-to-cart" data-product-name="${product.name}">
                    Add to bag
                </button>
            </div>        
        </div>
    `;
});

document.querySelector('.shop-products').innerHTML = productsHTML;


 

// Generate the quantity of the cart
function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });

    document.querySelector('#bag-quantity')
        .innerHTML = cartQuantity;
};

document.querySelectorAll('#add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;
            addToCart(productName);
            updateCartQuantity();
        });
    });