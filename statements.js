//patterns
let cols = 1;
let res1 = "";
for (let i= 0; i < 4; i++){
    for(let j = 0; j < cols; j++){
        res1 += "*";
    }
    cols += 2;
    res1 += "\n";
}
console.log(res1);

//reverse pattern
let rows = 5;
let cols1 = (rows*2)-1;
let res2 = "";
for (let i= 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
        res2 += "*";
    }
    cols -= 2;
    res2 += "\n";
}
console.log(res2);

//
let rows1 = 3;
let cols2 = 1;
let res3 = "";
let space = ((rows1*2)-1)-1;
for (let i= 0; i < rows1; i++){
    for (let k = 0; k < space; k++){
        res3 += " ";
    }
    for(let j = 0; j < cols2; j++){
        res3 += "*";
    }
    cols2 += 2;
    space -=2;
    res3 += "\n";
}
console.log(res3);

//number pattern
let rows2 = 3;
let cols3 = 1;
let res4 = "";
let space1 = ((rows2*2)-1)-1;
let num = 1;
for (let i= 0; i < rows1; i++){
    for (let k = 0; k < space1; k++){
        res4 += " ";
    }
    for(let j = 0; j < cols3; j++){
        res4 += num++;
    }
    cols3 += 2;
    space1 -=2;
    res4 += "\n";
}
console.log(res4);


//task
let row = 4;
let cols4 = 1;
let res5 = "";
for (let i= 1; i <= row; i++){
    for(let j = 1; j <= cols4; j++){
        res5 += j;
    }
    cols4 += 2;
    res5 += "\n";
}
console.log(res5);


