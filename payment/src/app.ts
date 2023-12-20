import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/list-template";
import { Payment } from "./classes/payment";
import { Formatter } from "./interfaces/IFormatter";

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
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: Formatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  console.log(doc.format());
  list.render(doc, type.value, "start");
});
