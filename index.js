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
  for (let i = 0; i<array.length-1; i++){
    if (array[i] === findFn){
      return array[i]
    }
    else {
      return null
    }
  }
}
describe('findBy(array, findFn)', function() {
  it('finds the a value that satisfies `findFn`', function() {
    const c = Math.floor(Math.random() * 100)

    expect(findBy([1, 1, 1, 1, c, 1, 2], n => n === c)).toEqual(c)
  })

  it('returns `null` if no match found', function() {
    expect(findBy(["dog", "cat", "cow"], a => a === "moose")).toEqual(null)
  })
})
})
