//operators
//Binary & unary operators

let a=3;
let b =a++ + a;
console.log(a);
console.log(b);
//pre increment
let c = 4;
let d = ++c + c;
console.log(c);
console.log(d);

//binary Operators
//Arthimetic,logical,relational,Bitwise
console.log(4/3);
console.log(0.1+0.2);

console.log(2+"2");
console.log(2*"2");
console.log("2"+3+4);
console.log(3+"a");
console.log(3+true);

console.log([1,2,3]+[1,2,3]);
console.log([1,2,3]*[1,2,3]);

console.log(3^"20");
console.log("2">"10");
console.log(null==undefined);
console.log(null<false);

console.log([3,4,5]==[3,4,5]);
console.log([3,4,5]<[4]);

//logical
console.log(3>2 && 2<1);
console.log(3>2 || 2<1 && 2>1);
console.log(null && undefined && 2);
console.log(null || undefined || 2);

//bitwise
console.log(12|4);
console.log(12^4);

//ternary
let a1=1 > 2 ? 6 : "name";
console.log(a1);