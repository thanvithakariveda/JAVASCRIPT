import { getAllProducts } from './product.js';
import { addToCart,getCartItems,getCartTotal } from './cart.js';
import { processPayment } from './payment.js';

console.log(getAllProducts());

addToCart(1,2);
addToCart(3,1);

console.log(getCartItems());
console.log(getCartTotal());

console.log(processPayment('upi','WELCOME10'));
