
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productName: '1G Concrete Dash Shirt',
        quantity: 1
    }, {
        productName: 'X-Lite X-1005 Ultra Carbon Dyad Helmet',
        quantity: 1
    }];
}

 function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

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

    saveToStorage();
};


// Delete product in the cart

export function removeFromCart(productName) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productName !== productName) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
};