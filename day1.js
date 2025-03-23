console.log("Hello Js Program");

//Hoisting->Let const var
let a=10;
a='js'
console.log(a);
let arr =[1,2,3,4,5,6];
arr[8]=21;
console.log(arr);

let b = arr;
b[1]=31;
console.log(arr);
console.log(b);

//object
let obj = {name:"Js", time:"8am",null:"Java"}
obj["test"]="friday"
console.log(obj.name);
console.log(obj);

let obj1={
    name:{
        address:{
            city:{
                name:"Chennai"
            }
        }
    }
}
console.log(obj1.name.address)
