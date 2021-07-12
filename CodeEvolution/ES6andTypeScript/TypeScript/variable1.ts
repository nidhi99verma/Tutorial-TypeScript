var x  = 10;
var y  = 'Nidhi';
var z = true;
var n;
console.log(x, y, z);

//type: annotation
var a: number = 10;
var b: string  = 'Nidhi';
var c: boolean = true;
var v: number;
console.log(x, y, z);

var t1 = 10;
var t2 = t1 + 'Hello';
console.log(t2);
//var t2 = t1 + 20;

var info: any;

info = 10;
info = 'Nidhi';
info = true;


//tsc variable1.ts
//node variable1.js

//tsc --init