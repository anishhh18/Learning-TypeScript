let response:any = "23"

let numrical:number = (response as string).length

type book = {
  name:string
}

let bookString = `{"name":"What the fuckk"}`
let bookObj = JSON.parse(bookString) as book
console.log(bookObj.name
)

let value :any
value="anish"
value=2
value.toUpperCase()
let newVal :unknown
newVal="anish"
value=2
// newVal.toUpperCase()

typeof newVal === "string" ? newVal.toUpperCase() : "error"


try {
  console.log("Anish")
} catch (error) {
  error instanceof Error ? console.log(error.message):console.log(error)
  
}

let data:unknown = "chai"
let strData:string=data as string

type Role = "admin" | "user" | "superAdmin" ;

function redirectingBasedOnRole(role:Role):void{
  if(role==="admin"){
    console.log("Redirecting to admin")
    return
  }
  if(role==="user"){
    console.log("Redirecting to user")
    return
  }
  role
}