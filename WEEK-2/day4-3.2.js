const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// 1. Create a deep copy
const copiedOrder = structuredClone(order);

// 2. Modify values in copied object
copiedOrder.customer.address.city = "Bangalore";
copiedOrder.items[0].price = 65000;

// 3. Log both objects
console.log("Original Order:", order);
console.log("Copied Order:", copiedOrder);+