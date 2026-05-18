import React from "react";
import Product from "../week 5/Product";

const products = [
{
id:1,
title:"Fjallraven Backpack",
price:109.95,
image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
},
{
id:2,
title:"Mens Casual T-Shirt",
price:22.3,
image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879.jpg"
},
{
id:3,
title:"Mens Cotton Jacket",
price:55.99,
image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
},
{
id:4,
title:"Mens Slim Fit",
price:15.99,
image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
},
{
id:5,
title:"Dragon Bracelet",
price:695,
image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640.jpg"
},
{
id:6,
title:"Gold Micropave Ring",
price:168,
image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640.jpg"
}
];

function App(){

return(

<div>

<h1 style={{textAlign:"center"}}>Result</h1>

<div className="container">

{products.map((p)=>(
<Product
key={p.id}
title={p.title}
price={p.price}
image={p.image}
/>
))}

</div>

</div>

)

}

export default App;