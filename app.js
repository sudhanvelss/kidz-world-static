const productTitles = document.querySelectorAll('.container div div h3');
const productPrices = document.querySelectorAll('.buy p');
const cartItemCountElement = document.querySelector('#cart-value');
const cart = document.querySelector('#cart');
const cartItems = [];

let totalCost = 0;

function addToCart(index) {
  const productName = productTitles[index].textContent;
  const priceText = productPrices[index].textContent.replace('$', '');
  const price = parseFloat(priceText);
  const existingProduct = cartItems.find((item) => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cartItems.push({ name: productName, price, quantity: 1 });
  }

  totalCost += price;
  updateCartItemCount();
}

function updateCartItemCount() {
  let numberOfItems = 0;
  for (const item of cartItems) {
    numberOfItems += item.quantity;
  }
  cartItemCountElement.textContent = numberOfItems;
}

cart.addEventListener('click', () => {
  console.clear();
  for (const item of cartItems) {
    console.log(`Item Name: ${item.name} - Quantity: ${item.quantity}`);
  }

  const dollars = Math.floor(totalCost);
  const cents = Math.round((totalCost - dollars) * 100);
  console.log(`Total Amount: $${dollars} dollars and ${cents} cents`);
});

const addToCartButtons = document.querySelectorAll('.button');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    addToCart(index);
  });
});