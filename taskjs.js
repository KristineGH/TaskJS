// 1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
let ods= [] ;
let even=[] ;
function separate(array){
    for (let i = 0; i<array.length ; i++){
        if (array[i] % 2 === 0){
            even.push(array[i])
        } else {
            ods.push(array[i])
        }
    }
}
console.log(separate([2, 6, 9, 10, 11]));
console.log(ods);

// 2. Given 2 arrays. Return array with duplicate items.

function return_duplicate(array1, array2){
    let result = [];
    for (let i=0; i<array2.length; i++){
        if ( check_if(array1, array2[i])){
            result.push(array2[i]);
        }
    }
    return result;
}


function check_if(array, number){
    for (let i=0; i<array.length; i++){
        if (number === array[i]){
            return true;
        }
    }
    return false ;
}

let arr1 = [2, 5, 6] ;
let arr2 = [2, 4, 7, 5] ;
console.log(return_duplicate(arr1, arr2)) ;

// 3. Given an array and element. Check if array includes that element.

function check(array, element){
    for (let i=0 ; i<array.length ; i++){
        if (array[i] === element){
            return true;
        }
    }
    return false;
}
let my_array = [2, 5, 9];
console.log(check(my_array, 10));

// 4. Given an object. Return array of it’s keys.
 
function returnKeys(){
    var my_object = {
        'name' : 'Ani' ,
        'surname' : 'Yan' , 
        'age' : 25 
    }
    var key_array = [];
    for (let key in my_object){
        key_array.push(key);
    }
    return key_array;
}
console.log(returnKeys());

// 5. Insert a digit and a number. Check whether the number contains that digit or not.

function check(number, digit){
    let n= number.toString().split('')
    for (let i=0 ; i<n.length ; i++){
        if (n[i] == digit){
            return true;
        }
    }
    return false;
}
console.log(check(123 , 3));

// 6. Enter a number. Find the difference between its biggest and smallest digits.

function difference(number){
    let number_char_digits = number.toString().split('');
    let number_digits = number_char_digits.map(Number) ; // [6, 5, 4]
    let smallestDigit = Number.MAX_SAFE_INTEGER ;
    let biggestDigit = Number.MIN_SAFE_INTEGER ; 
    for (let i=0; i<number_digits.length; i++){
        if(number_digits[i]> biggestDigit){
            biggestDigit = number_digits[i] ;
        }
        if(number_digits[i]< smallestDigit){
            smallestDigit = number_digits[i] ;
        }
    }
    return biggestDigit - smallestDigit;
}
console.log(difference(957));