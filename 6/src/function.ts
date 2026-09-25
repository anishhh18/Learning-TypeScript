function makeChai(type:string,cups:number){
  console.log(`Making ${cups} of ${type}`)
}


makeChai("masalachai",5)

function getChaiprice():number{
  return 35
}

function makeOrder(order:string){
  return !order? null : order
}