import { getProductById, checkStock } from './product.js';

let cart = [];

export function addToCart(id, q) {
  if (!checkStock(id, q)) return "No stock";
  const item = cart.find(i => i.id === id);
  item ? item.q += q : cart.push({ id, q });
  return "Added";
}

export const removeFromCart = id =>
  cart = cart.filter(i => i.id !== id);

export const updateQuantity = (id, q) => {
  const item = cart.find(i => i.id === id);
  if (item && checkStock(id, q)) item.q = q;
};

export const getCartItems = () =>
  cart.map(i => ({ ...getProductById(i.id), quantity: i.q }));

export const getCartTotal = () =>
  getCartItems().reduce((t, i) => t + i.price * i.quantity, 0);

export const clearCart = () => cart = [];