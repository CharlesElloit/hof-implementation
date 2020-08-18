//Map Function Implemention

/*
   1: You should have a function that takes two agruments
   2: One is arr and the other is a function
   3: Create a new array which is to be return with the result
   4: Check if the array pass in the map function is an object and the function is a function
   5: For loop to iterate throught the array and pass each value into the function
   6: Return the new array with the result
*/

const map = (arr, func) => {
  const newarr = [];

  if (typeof func === "function" && typeof arr === "object") {
    arr.forEach(item => {
      newarr.push(func(item));
    });
    // for (let i = 0; i < arr.length; i++) {
    //   newarr.push(func(arr[i]));
    // }
  } else {
    return `${func} is not a function`;
  }

  return newarr;
};

const arr = [0, 1, 2, 3];

function add(num) {
  return num + 1;
}

// console.log(map(arr, add));

//Reduce Function Implementation

/*
  1: create reduce function that takes three agurments
    =>: An Array
    =>: Function to run on each element of the array 
       and the function should take two argurment 
        =>: The previous accumulator result
        =>: Array element
  2: Accumulator that keeps track of the previous function result
  3: Check if the array passed in is an object and the function is function
  4: A for loop to iterate throught the elements and run it throught the function and 
      store the result in thtore the result in the accumulatore accumulator
  */

const reduce = function(iterable, reducefunction, accumulator = 0) {
  if (typeof reducefunction === "function" && typeof iterable === "object")
    for (let i of iterable) {
      accumulator = reducefunction(accumulator, i);
    }
  else if (!reducefunction)
    throw Error(
      `You should pass Function to the reduce instate of ${reducefunction}`
    );
  else if (!iterable)
    throw Error(
      `You should pass an iterable object to the reduce function instate of ${iterable}`
    );
  // for (let i = 0; i < iterable.length; i++)
  //   accumulator = reducefunction(accumulator, i);
  return accumulator;
};

const addOne = (x, y) => {
  return x + y;
};

// console.log(reduce(arr, addOne));

//filter Implementation.

/* 
 1: Create a filter function that takes two arguments
      =>: An Array
      =>: Function to run on each element of the array 
 2: Create a new empty array

    ### Optional 
       check if the array passed in is an object and the function is a function

 3: Loop througth the array which is pass to filter to function and call the function which
    is passed to the filter function and pass three arguments 
      => the current element during the iteration 
      => the iterable counter
      => the array which is passed to the filter function

  4: Check if the result of the function passed to filter return true then add the value to the new
     empty array

  5:return the new empty array
*/

const filter = function(arr, filterFunc) {
  const filterArray = [];
  if (typeof filterFunc === "function" && typeof arr === "object")
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      const result = filterFunc(key, i, arr);
      if (result) filterArray.push(key);
    }
  else if (!filterFunc)
    throw Error(
      `You should pass Function to the reduce instate of ${filterFunc}`
    );
  else if (!arr)
    throw Error(
      `You should pass an iterable object to the reduce function instate of ${arr}`
    );

  return filterArray;
};

const newarr = [0, 1, 2, 3];

const isGreaterThenOne = num => {
  if (num > 1) return true;
};

console.log(filter(newarr, isGreaterThenOne));
