import React from "react";

function Product(props){

return(

<div className="card">

<img src={props.image} alt="product"/>

<h4>{props.title}</h4>

<p>Price: ${props.price}</p>

</div>

)

}

export default Product;