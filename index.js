function iterativeLog(array){
  array.forEach(function(element,index){
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  var anything = [1,2,3,4,5];
  anything.forEach(callback);
  return anything;
}

 function doToArray(array, callback){
   array.forEach(callback);
 }

// function iterativeLog(array) {
//   array.forEach((el, i) => {
//     console.log(`${i}: ${el}`)
//   })
// }
//
// iterate(callback){
//   array.forEach(callback)
//
// }
//
// function moo(element,index,array){
//   myArr = [1,2,3,4,5];
// }
//
// doToArray(array, callback)

// - Define a function, `iterativeLog()`, that accepts an array. Call `.forEach()`
//   on this array, and inside the callback, log each element with the format
//   `${index}: ${element}`.
// - Define a function, `iterate`, that accepts a callback. Within the `iterate()`
//   function, you should initialize an array — it can contain anything you want.
//   Call `.forEach()` on this array, passing the callback to `.forEach()`. Then
//   return the array that you initialized.
// - Define a function, `doToArray` that accepts an array and a callback. Call
//   `.forEach()` on the array, passing the callback as the `forEach` callback.
