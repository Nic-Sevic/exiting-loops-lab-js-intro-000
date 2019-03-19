function breakOut(array, changeValue, stopValue) {
  for (let i=0; i < array.length-1; i++){
    if (array[i] === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}


array1.forEach(function(element) {
  console.log(element);
});

function keepGoing(array, changeValue, skipValue) {
  for (var i in array) {
    if (i === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  for ( var i in array){
    if (i === findFn){
      return i
    }
    else {
      return null
    }
  }
}
