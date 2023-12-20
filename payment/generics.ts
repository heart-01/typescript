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
console.log({doc1});

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
