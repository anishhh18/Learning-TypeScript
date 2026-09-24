type chaiOrder = { type: string; sugar: number; strong: boolean };

function makeChai(order: chaiOrder) {
  return console.log(order);
}

function serveChai(order: chaiOrder) {
  return console.log(order);
}

interface teaRecepi {
  water: number;
  milk: number;
}

// class masalaChai implements teaRecepi {
//   water=100;
//   milk = 50;
// }

interface cupSize {
  size: "small" | "large";
}

class chai implements cupSize {
  size: "small" | "large" = "large";
}

type baseChai = {teaLeaves:number}
type extra = {masala:number}

type masalaChai = baseChai & extra

const cups:masalaChai = {
  teaLeaves:0,
  masala:5
}

type user ={
  username:string
  bio?:string
}

const p1:user={
  username:"anish"
}
const p2:user={
  username:"anu",
  bio:"asfksf"
}
p1.username="AnishShara"

type config = {
  readonly appName:string
  version:number
}

const app:config={
  appName:"apptext",
  version:1
}

app.version = 5
// app.appName ="skufh"