import {products} from "../script/data.js";
import {cart, removeFromCart} from "./cart.js";


const menuBtn = document.querySelector('#menu-button');
const menuBox = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('#close-button');

menuBtn.addEventListener('click', () => {
    menuBox.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    menuBox.style.display = 'none';
});


// Generate the actual products inside the bag section into HTML

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productName = cartItem.productName;

    let matchingProduct;

    products.forEach((product) => {
        if (product.name === productName) {
            matchingProduct = product;
        }   
    });

    cartSummaryHTML += `
        <div class="cart-item" id="cart-item-container-${matchingProduct.name}">
            <div class="cart-img">
                <img src="styles/shop-pictures/${matchingProduct.name}.png" alt="">
            </div>
            <div class="cart-middle">
                <p class="cart-name">${matchingProduct.name}</p>
                <p class="cart-price">₱${matchingProduct.price}</p>
            </div>
            <div class="cart-right">
                <div class="remove-item" data-product-name="${matchingProduct.name}">
                    <ion-icon name="trash"></ion-icon>
                </div>
                <p class="quantity-title">Qty:</p>
                <div class="cart-quantity">
                    <button>-</button>
                    <p>${cartItem.quantity}</p>
                    <button>+</button>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.checkout-body')
    .innerHTML = cartSummaryHTML;

    
const deleteProduct = document.querySelectorAll('.remove-item');

deleteProduct.forEach((e) => {
    e.addEventListener('click', () => {
        const productName = e.dataset.productName;
        removeFromCart(productName);

        const productContainer = document.getElementById(`cart-item-container-${productName}`);
        productContainer.remove();
                
        updateCartQuantity();          
        updateBagQuantity ();
        updateOrderQuantity();
    });
});    


// Update the Checkout Quantity

function updateCartQuantity() {    
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('#checkout-cart-quantity')
        .innerHTML = `Checkout (${cartQuantity} items)`;
};

updateCartQuantity();   

function updateBagQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('#bag-quantity')
        .innerHTML = `${cartQuantity}`;
};

updateBagQuantity();

function updateOrderQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('#order-quantity')
        .innerHTML = `Items (${cartQuantity})`;
}

updateOrderQuantity();