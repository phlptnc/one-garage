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
                <div class="rating-container">
                    <div class="rating-box">
                        <img src="styles/ratings/rating-${bestProducts.rating.stars * 10}.png" alt="">
                    </div>
                    <p class="rating-number">${bestProducts.rating.count} sold</p>
                </div>
                <p class="price">₱${bestProducts.price}</p>
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
            <div class="add-to-bag-container" id="notif-${product.name}">
                <p class="add-to-bag-notif"><ion-icon name="checkmark-circle" class="check-mark"></ion-icon>Added to bag</p>
            </div>
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

updateCartQuantity();

document.querySelectorAll('#add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;
            addToCart(productName);
            updateCartQuantity();     

            const notifMessage = document.getElementById(`notif-${productName}`);
            
            notifMessage.style.display ='flex';

            setTimeout(() => {
                notifMessage.style.display = 'none';    
            }, 2000);
        });
    });
