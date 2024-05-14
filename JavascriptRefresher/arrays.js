/* In Javascript, arrays are objects. That means that arrays also have some 
built-in properties and methods 
One of the most commonly used built-in methods on arrays are 
the push() and the pop() methods.
*/

// add new items/elements to array
var fruits = [];
fruits.push('apple');
fruits.push('pear');

console.log(fruits);
fruits.pop();
console.log('used pop() to remove last item from array');
console.log(fruits);

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);

