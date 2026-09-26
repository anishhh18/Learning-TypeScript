const chaiFlavour:string[]=[]

type Chai = {
  name:string
  price:number
}

const rating:Array<number> = [2.3,5.3,63.2]

let menu:Chai[]=[
  {name:"MasalaChai",price:45},
  {name:"GingerChai",price:20},
  {name:"RedLable",price:10}
]

const cities:readonly string[] = ["kolkata","bihar","jaipur"]

// cities[0] = "anish"

const table:number [][]=[
  [1,2,3],
  [1,2,3],
  [1,2,3]
]

let chaiTuple: [string,number]
chaiTuple=["masala",20]

let userInfo:[string,number,boolean?];

userInfo=["anish",21]
userInfo=["annu",21,false]
let location:readonly[number,number];
location=[32.3,535.2]
// location[0]=[3498]

enum cupSize{
  small,
  medium,
  large
}

cupSize.large