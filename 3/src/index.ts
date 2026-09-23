let subs: number | string = "1m";

let apiReq: "pending" | "success" | "error" = "success";

let orders = ["12", "20", "28", "40"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
  currentOrder = "12";
}

console.log(currentOrder);
