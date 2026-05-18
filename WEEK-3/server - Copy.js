const http = require("http");

let products = [];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Create Product
  if (req.method === "POST" && req.url === "/products") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const product = JSON.parse(body);
      products.push(product);
      res.end(JSON.stringify({ message: "Product created" }));
    });
  }

  // Read All Products
  else if (req.method === "GET" && req.url === "/products") {
    res.end(JSON.stringify(products));
  }

  // Read Product by Brand
  else if (req.method === "GET" && req.url.startsWith("/products/brand/")) {
    const brand = req.url.split("/")[3];
    const result = products.filter(p => p.brand === brand);
    res.end(JSON.stringify(result));
  }

  // Update Product
  else if (req.method === "PUT" && req.url.startsWith("/products/")) {
    const id = req.url.split("/")[2];
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const data = JSON.parse(body);
      const product = products.find(p => p.productId == id);
      if (product) {
        product.name = data.name;
        product.brand = data.brand;
        product.price = data.price;
      }
      res.end(JSON.stringify({ message: "Product updated" }));
    });
  }

  // Delete Product
  else if (req.method === "DELETE" && req.url.startsWith("/products/")) {
    const id = req.url.split("/")[2];
    products = products.filter(p => p.productId != id);
    res.end(JSON.stringify({ message: "Product deleted" }));
  }

});

server.listen(3000, () => console.log("Server running on port 3000"));