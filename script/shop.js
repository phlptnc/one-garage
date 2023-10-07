const products = [{
    name: '1G Concrete Dash Shirt',
    price: '756'
}, {
    name: 'Komine SA-245 Waterproof Belt Pouch',
    price: '1,690'
}, {
    name: '1G One Garage Worldwide Riding Jersey Offiicial',
    price: '1,350'
}, {
    name: 'Dianese Impeto Gloves',
    price: '8,690'
}, {
    name: 'Cardo PackTalk Edge Single Headset',
    price: '19,500'
}, {
    name: 'GIVI B42N Antartica Top Case (42L)',
    price: '6,990'
}, {
    name: 'X-Lite X-1005 Ultra Carbon Dyad Helmet',
    price: '31,990'
}, {
    name: 'LS2 FF900 Valiant II Special Helmet',
    price: '12,990'
}, {
    name: 'Taichi RSB283 Waterproof Cargo Backpack (25L)',
    price: '5,690'
}, {
    name: 'G-REN Mags For Aerox Nvx (Gr6) 14',
    price: '5,690'
},]

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
                <button>Add to bag</button>
            </div>        
        </div>
    `;
});

document.querySelector('.shop-products').innerHTML = productsHTML;
