"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    return typeof kind === "string" ? `Making ${kind}` : `Order ${kind}`;
}
// console.log(getChai("Masala Chai"))
function serverChai(msg) {
    return msg ? `Message : ${msg}` : `Make default chai`;
}
// console.log(serverChai("Add more sugar"))
function orderChai(size) {
    return size === "small" ? `Small Chai` : size === "medium" || size === "large" ? `Make extra chai` : `Make ${size} chai`;
}
console.log(orderChai("small"));
class kulhadChai {
    serve() {
        return `Serving kulhad chai`;
    }
}
class cuttingChai {
    serve() {
        return `Serving cutting chai`;
    }
}
function serve(chai) {
    return chai instanceof kulhadChai ? chai.serve() : chai.serve();
}
//# sourceMappingURL=index.js.map