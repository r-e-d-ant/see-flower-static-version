
/* -- accessing required dom -- */
const inCartTotal = document.querySelector('.in-cart-total');
const cartPrices = document.querySelectorAll('.cart-product-price');

/* -- function to calculate and return total amount -- */
const getTotalInCart = () => {
    // total initialization
    var total = 0

    // loop trough all in cart product prices
    for (var i = 0; i < cartPrices.length; i++ ){
        const amount = cartPrices[i].textContent.slice(0, cartPrices[i].textContent.length - 1) // remove the last dolar sign
        total = parseInt(total) + parseInt(amount) // calculate total
    }
    // return total
    return total
}

// call the getTotalInCart and assign returned total
inCartTotal.textContent = getTotalInCart() + '$'
