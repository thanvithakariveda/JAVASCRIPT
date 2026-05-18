const products=[
{id:1,name:'Laptop',price:50000,stock:10,category:'electronics'},
{id:2,name:'Phone',price:30000,stock:15,category:'electronics'},
{id:3,name:'Headphones',price:2000,stock:25,category:'accessories'}
];

export const getProductById=id=>products.find(p=>p.id===id);
export const getAllProducts=()=>products;
export const getProductsByCategory=c=>products.filter(p=>p.category===c);
export const searchProducts=q=>products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase()));
export const checkStock=(id,q)=>getProductById(id)?.stock>=q;
export const reduceStock=(id,q)=>{const p=getProductById(id); if(p) p.stock-=q;}