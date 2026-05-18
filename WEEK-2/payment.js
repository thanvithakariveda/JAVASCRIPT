import { reduceStock } from './product.js';
import { getCartItems,getCartTotal,clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(method,coupon){
  if(!['card','upi','cod'].includes(method)) return "Invalid payment";

  const items=getCartItems();
  const subtotal=getCartTotal();
  const {discount,total}=coupon?applyDiscount(subtotal,coupon):{discount:0,total:subtotal};

  items.forEach(i=>reduceStock(i.id,i.quantity));
  clearCart();

  return {orderId:'ORD'+Date.now(),items,subtotal,discount,total,status:'success'};
}