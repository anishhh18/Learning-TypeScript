// const chai = {
//   name:"masala chai",
//   price:25,
//   isHot:true
// }
// // {
// //   name:string;
// //   price:number;
// //   isHot:boolean;
// // }
// let tea:{
//   name:string;
//   price:number;
//   isHot:boolean;
// }
// tea={
//   name:"masalaChai",
//   price:10,
//   isHot:true
// }

// type Tea={
//   name:string
//   price:number
//   indregdents:string[]
// }

// const adrakChai:Tea={
//   name:"adrakChai",
//   price:45,
//   indregdents:["sugar","chaipati","adrak "]
// }

// type cup = {size:string}
// let smallCup:cup={size:"200ml"}
// let bigCup={size:"200ml",material:"steeel"}
// smallCup=bigCup

// type Item = {name:string,quantity:number}
// type Address = {street:string,pin:number}

// type Order ={
//   id:string
//   item:Item[]
//   address:Address
// }

type tea={
  name:string;
  price:number;
  isHot:boolean;
}

// const updateTea =(updates:Partial<tea>)=>{
//   console.log(updates)
// }
const order =(updates:Required<tea>)=>{
  console.log(updates)
}
// updateTea({price:10})

order({name:"masalaChai",price:12,isHot:false})