let a = "aaabbbbcc"
let result = "";
let count = 1;
for(let i = 0; i < a.length; i++){
    if(a[i]=== a[i+1]){
        count++;
    }
    else{
        result += a[i]+ count; 
        count = 1;
    }
}

console.log(result);

//find dublicate numbers
const array =[2,3,5,6,8,9,2,3];
const frequency ={};
let duplicates =[];

for(let num of array){
    if(frequency[num]){
        duplicates.push(num);
    }
    else{
        frequency[num]=1;
    }
}
console.log(duplicates);

//total number of duplicates
let countMap ={};
let duplicatecount = 0;
const array1 =[2,3,5,6,8,9,2,3];

for(let i = 0; i < array1.length;i++){
    if(countMap[array1[i]]){
        countMap[array1[i]]+=1;
    }
    else{
        countMap[array1[i]]=1;
    }
}
for(let key in countMap){
    if(countMap[key]>1){
        duplicatecount++;
    }
}
console.log(duplicatecount);2