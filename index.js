function breakOut(array, changeValue, stopValue) {
  for (var i in array){
    if (i === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}

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
