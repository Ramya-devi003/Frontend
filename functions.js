//Basic Functions
function example1(){
    console.log("Hello New Function")
}
example1()

function example1(a){
    console.log("Hello New Function",a)
    return a + 4
}
let res = example1(5)
console.log(res)

function example1(...a){
    console.log("Hello New Function",a)
    return a + 4
}
let res1 = example1(5,6,7,8,9)
console.log(res1)

//Arrow function Es6
let a1 = (a)=>{
    console.log("Hello New Function",a)
}
a1(3)

//IIFE - Immedietly Invoked Function Expression

let annoy = (function(){
    console.log("IIFE")
})()

//Higher order function

let outer = (a) => {
    a()
}

let inner = () => {
    console.log("Im from Inner function")
}
outer(inner)


//Currying - Achiving only in js

function a(a1){
    return function(b){
        return a1 + b;
    }
}
let r1 = a(2);
console.log(r1(5))

//Generators

function* generators(){
    for(let i = 0 ; i < 4; i++){
        yield i;
    }
}
let r2 = generators();
console.log(r2.next().value)
console.log(r2.next().value)
console.log(r2.next().value)