let i = 0
var array = new Array()
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if i == 1 {
      array(i) = "I am 1 strange loop."
    } else {
      array(i) = "I am ${i} strange loops."
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
