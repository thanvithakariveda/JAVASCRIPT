const coupons={WELCOME10:{type:'percentage',value:10,min:1000}};

export const applyDiscount=(total,code)=>{
  const c=coupons[code];
  if(!c||total<c.min) return {discount:0,total};
  const d=c.type==='percentage'? total*c.value/100 : c.value;
  return {discount:d,total:total-d};
};