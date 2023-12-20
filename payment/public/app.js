import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
/*
let docOne: Formatter;
let docTwo: Formatter;

docOne = new Invoice('adam','hamburger',250);
docTwo = new Payment('seller','beef',200);

let docs: Formatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
*/
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc.format());
});
