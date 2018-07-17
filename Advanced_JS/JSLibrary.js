 function each(array,callback){
     for (let index = 0; index<array.length;index++) {
        callback(array[index],index);
     }
 }
 // an array of strings.
 const stringArray = ['1','cat','2','3','4','5','6','7','8','dog'];

 //call each function 
//  each(stringArray,function(element,index){
//     console.log(`the element : ${ element } and index: ${index}`); 
//  });

 each(stringArray, listitem);
 function listitem(element, index) {
    console.log(`the element : ${ element } and index: ${index}`); 
 };

 //map transforms the array based on the callback operation
 //returns a new array
 function map(array,callback){
    const results = [];
    for (let index=0; index<array.length;index++){
        results.push(callback(array[index],index));
    }
     return results; //after the transformation
 }

let results = map(stringArray, function(element,index){
    // return an integer array (base 10)
    return (parseInt(element, 10));
});
console.log("The number array is ",results);

function filter(array,callback){
    const results = [];
    for (let index = 0; index < array.length;index++){
        if (callback(array[index],index)){
            results.push(array[index]); // passes the callback
        }
    }

    return results;

}



function reject(array,callback){
    const results =[];
    for (let index = 0; index < array.length;index++){
        if (!callback(array[index],index)){
            results.push(array[index]);
        }
    }
    return results;
}

//cannot use typeof because even NaN shows up as number.
results = reject(results,function(element){
    return isNaN(element);
});

//JavaScript is variatic, so we can only pass one argument

results = filter(results, function(element){
    return element %2 ==0;
  
});

console.log(results);

function find(array,callback){
    for (let index = 0; index<array.length;index++){
        if(callback(array[index],index)){
            return (array[index]);
        }
    }
}

console.log(find(results,function(element){
        return element ===4;
        }
    ));

    //reduces it to a single value
    //memo is the summation of everything of the results array
function reduce(array,callback,memo){
    const results = [].concat(array);//copy of the array, original array stays intact
    if (memo === undefined){ //optional parameter
        memo=results.pop();//memo is 8. pop is a destructive method
    }
    for (let index=0;index<array.length;index++){
        console.log(memo,array[index],index)
        memo= callback(memo,array[index],index);
        console.log(memo);
    }
    return memo;
}

results = reduce(results,add)

 
function add(num1,num2,num3){
    return num1 + num2 + num3
}

console.log(results);


