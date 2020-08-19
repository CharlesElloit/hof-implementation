# Higher Order Function Implementation in JavaScript

This is an implementation of an existing JavaScript higher Order Function (hof)  
to give you some better understanding of how they work and how they are implemented in JavaScript.

In addation to that i've also provided algorithm above the implementation of those function
to guide you through and help you understand how it's been implemented or else if you wanna give a try
to re-implement which i really encourage you to do so.

# Brief explaination on the functions that i've implemented

# Map

This is a higher Order Function (hof) which accepts two arguments one is a function and the other is an array.
The function which is passed as argument will run on each of the element in the array which is passed in, and execute the function on each element and then return the result of the function in a new array.

# Reduce

This also one of the higher order function which accepts three arguments one is a function and the other is an array and third one is an accumulator, but you can name them what ever you want. So,
The accumulator is variable which keeps track of the previous result from the function execution, For example if
you have an array with [1,2] then the first time the function runs it will take 1 and 2 as it's arguments considering that
the function you pass into the [Reduce] is add which take x and y as it's arguments. So what ever the result the function return will be sorted in the accumulator for the next iteration in particular example the result of the function is [3] and that's what is sort in the accumulator.
Same as the map function, the function which is passed as argument will run on each of the element in the array which is passed in, and execute the function on each element and then return the result of the function in a new array.

# Filter

This is a higher Order Function (hof) which accepts two arguments one is a function and the other is an array.
The function which is passed as argument will run on each of the element in the array which is passed in, and execute the function on each element and then return the result of the function in a new array.
But the main differences is that the filter function retains the values which return true and get rid of the value which return false.

Example:

conside you have a function call isGreaterThanOne. so as the name suggested the function is checking the number if it's greater than one.
Therefore you have an array with [0, 1, 2, 3] and pass this array to the function isGreaterThanOne so you will expect
2, 3 to be true because they are greater than one, that's basically what a filter is.

## author: Charles Elloit

Those are three hof that i've cover here which are the most used or often been used.
but there are many that i have not cover here but i hope this give you a better understanding.
for more details about the hof checkout this link

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]
