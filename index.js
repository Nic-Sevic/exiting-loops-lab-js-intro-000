function breakOut(array, changeValue, stopValue) {
  for (let i=0; i < array.length-1; i++){
    if (array[i] === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i in array) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  console.log(findFn)
  for (let i = 0; i<array.length-1; i++){
    if (array[i] === true){
      return array[i]
    }
    else {
      return null
    }
  }
}
