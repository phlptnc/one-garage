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
                    <p class="cart-item-quantity">${cartItem.quantity}</p>
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
        updateSubtotal();
        updateTotalPrice();
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


// update the SubTotal Price of checkoutx

function updateSubtotal() {
    var cartItemContainer = document.getElementsByClassName('checkout-body')[0];
    var cartItems = cartItemContainer.getElementsByClassName('cart-item');
    var subTotal = 0;

    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i];
        var priceElement = cartItem.getElementsByClassName('cart-price')[0];
        var quantityElement = cartItem.getElementsByClassName('cart-item-quantity')[0];
        var price = priceElement.innerText.replace('₱','');
        var priceNumber = price.replace( ',', '');
        var quantity = quantityElement.innerText;
        subTotal = subTotal + (priceNumber * quantity);
    }

    document.getElementById('subtotal').innerText = '₱' + (subTotal.toLocaleString());
};

updateSubtotal();


// update the Total Price of checkout

function updateTotalPrice() {

    const shippingFee = 55;
    var subTotal = document.getElementById('subtotal').innerText;
    var price = subTotal.replace('₱', '')
    var priceNumber = parseFloat(price.replace(',', '')); 
    var totalPrice = shippingFee + priceNumber;

    document.getElementById('total-order').innerText = '₱' + (totalPrice.toLocaleString());

};

updateTotalPrice();
