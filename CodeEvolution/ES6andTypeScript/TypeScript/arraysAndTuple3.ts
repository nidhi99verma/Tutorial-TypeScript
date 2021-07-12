//array

let atrArr1: string[] = ['Hello', 'world'];
let atrArr2: Array<string> = ['Hello', 'world'];

console.log(atrArr1);
console.log(atrArr2);

let atrArr3: any[] = ['Hello', 1, true];

console.log(atrArr3);

//tuple(combination of types)

let myTuple: [string, number] = ['Hi', 10];
console.log(myTuple[0]); 
console.log(myTuple[1]); 
// myTuple[2] = 100;
// console.log(myTuple[2]); 
console.log(myTuple); 