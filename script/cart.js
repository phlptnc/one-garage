import {products} from "../script/data.js";

export let cart = [{
    productName: '1G Concrete Dash Shirt',
    quantity: 1
}, {
    productName: 'X-Lite X-1005 Ultra Carbon Dyad Helmet',
    quantity: 2
}];


// Add products to the cart

export function addToCart(productName) {
    let matchingItem;

    cart.forEach((cartItems) => {
        if (productName === cartItems.productName){
            matchingItem = cartItems;
        }
    });

    // Add the quantity of the same items to the bag

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push ({
            productName: productName,
            quantity: 1
        });   
    };
};


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
        <div class="cart-item" id="cart-item-container-${matchingProduct.name}" >
            <div class="cart-img">
                <img src="styles/shop-pictures/${matchingProduct.name}.png" alt="">
            </div>
            <div class="cart-middle">
                <p class="cart-name">#${matchingProduct.name}</p>
                <p class="cart-price">₱${matchingProduct.price}</p>
            </div>
            <div class="cart-right">
                <div class="remove-item" data-product-name="${matchingProduct.name}">
                    <ion-icon name="trash"></ion-icon>
                </div>
                <div class="cart-quantity">
                    <button>-</button>
                    <p>${cartItem.quantity}</p>
                    <button>+</button>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.full-cart')
    .innerHTML = cartSummaryHTML;


// Delete product in the cart

function removeFromCart(productName) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productName !== productName) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
};

const deleteProduct = document.querySelectorAll('.remove-item');

deleteProduct.forEach((e) => {
    e.addEventListener('click', () => {
        const productName = e.dataset.productName;
        removeFromCart(productName);

        const productContainer = document.getElementById(`cart-item-container-${productName}`);

        productContainer.remove();
    });
});  