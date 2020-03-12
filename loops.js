let i = 0

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if i == 1 {
      console.log("I am 1 strange loop")
    } else {
      console.log("I am ${i} strange loops")
    }
  }
}

function doWhileLoop(num) {
  do {
    console.log(i, num)
  } while (incrementVariable() < num)
}

function incrementVariable() {
  return i += 1
}
