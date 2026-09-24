"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "23";
let numrical = response.length;
let bookString = `{"name":"What the fuckk"}`;
let bookObj = JSON.parse(bookString);
console.log(bookObj.name);
let value;
value = "anish";
value = 2;
value.toUpperCase();
let newVal;
newVal = "anish";
value = 2;
// newVal.toUpperCase()
typeof newVal === "string" ? newVal.toUpperCase() : "error";
try {
    console.log("Anish");
}
catch (error) {
    error instanceof Error ? console.log(error.message) : console.log(error);
}
let data = "chai";
let strData = data;
function redirectingBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user");
        return;
    }
    role;
}
//# sourceMappingURL=index.js.map