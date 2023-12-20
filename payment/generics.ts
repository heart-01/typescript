// Example: Generic Type Object
/*
const addUID = <T>(obj: T) => {
   let uid = Math.floor(Math.random() * 100);
   return {...obj, uid};
 }
*/
const addUID = <T extends { name: string }>(obj: T): T => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc1 = addUID({ name: "adam", age: 40 });
//let doc2 = addUID('Jack');
console.log({ doc1 });

// -----------------------------------------------
// Example: Generic Type Array
const reverse = <T>(arr: T[]): T[] => {
  return arr.reverse();
};

const reversedNumber = reverse<number>([1, 2, 3, 4, 5]);
const reversedString = reverse<string>(["a", "b", "c", "d", "e"]);

console.log({ reversedNumber });
console.log({ reversedString });

// -----------------------------------------------
// Example: Generic Type number | string
const sum = <T extends number | string>(a: T, b: T): T => {
  if (typeof a === "number" && typeof b === "number") {
    return (a + b) as T;
  } else if (typeof a === "string" && typeof b === "string") {
    return (a + b) as T;
  } else {
    throw new Error("Invalid argument types");
  }
};

const result1 = sum(1, 2);
const result2 = sum("Hello, ", "world");

// -----------------------------------------------
// Example: Generic Type And Name not sent, generic type
const getFirst = <T>(arr: T[]): T => {
  return arr[0];
};

const a = getFirst([1, 2, 3]); //  a: number เพราะ [1,2,3] เป็น number[] ทำให้ T = number
const b = getFirst(["One", "Two", "Three", "Four", "Five"]); //  b: string เพราะ argument เป็น string[] ทำให้ T = string

// -----------------------------------------------
// Example: Generic Multiple Types
const map = <T, U>(arr: T[], func: (arg: T) => U): U[] => {
  return arr.map(func);
};

const input = ["4", "5", "6"];
map(input, (s) => parseInt(s)); // [4, 5, 6]

// -----------------------------------------------
// Example: Generic Types In Interface
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc3: Resource<string> = {
  uid: 1,
  resourceName: "person",
  data: "adam",
};

const doc4: Resource<string[]> = {
  uid: 1,
  resourceName: "person",
  data: ["cola", "pepsi"],
};

// -----------------------------------------------
// Example: Generic Types In Class
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getValue(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello generics!");

console.log({ numberBox });
console.log({ stringBox });

// -----------------------------------------------
// Example: Generic Types In Class
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getValue(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello generics!");

console.log({ numberBox });
console.log({ stringBox });

// -----------------------------------------------
// Example: Generic Multiple Types In Class
class Box2<T, U, H> {
  constructor(private content: T, private content2: U, private content3: H) {}

  getValue(): void {
    console.log(this.content);
    console.log(this.content2);
    console.log(this.content3);
  }
}

const testBox2 = new Box2<number, string, boolean>(42, "Hello", true);
