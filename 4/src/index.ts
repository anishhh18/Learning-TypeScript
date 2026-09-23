function getChai(kind: string | number) {
  return typeof kind === "string" ? `Making ${kind}` : `Order ${kind}`;
}
// console.log(getChai("Masala Chai"))

function serverChai(msg?:string){
  return msg ? `Message : ${msg}`:`Make default chai`
}
// console.log(serverChai("Add more sugar"))

function orderChai(size:"small"|"medium"|"large"|number){
  return size === "small" ? `Small Chai`: size === "medium" || size === "large" ? `Make extra chai`: `Make ${size} chai`
}

console.log(orderChai("small"))

class kulhadChai{
  serve(){
    return `Serving kulhad chai`
  }
}
class cuttingChai{
  serve(){
    return `Serving cutting chai`
  }
}

function serve(chai:kulhadChai|cuttingChai){
  return chai instanceof kulhadChai ? chai.serve() : chai.serve()
}