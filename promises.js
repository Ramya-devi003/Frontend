
let Input1 = [3,4,2,5,1]
let Input2 = "madam"

function checkAndExecution(Input){
    if (Array.isArray(Input)){
        console.log("The datatype is an Array")
        let sortedArray = Input.sort();
        console.log("Sorted Array:",sortedArray)
    }
    else if(typeof Input == 'string'){
        console.log("The datatype is string")
        let reversed = Input.split('').reverse().join('')
        if(Input == reversed){
            return "string is palindrome"
        }
        else{
            return "string is not a palindrome"
        }
    }
}
console.log(checkAndExecution(Input1));
console.log(checkAndExecution(Input2));


