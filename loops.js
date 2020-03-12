lert i = 0

function doWhileLoop(num) {
  do {
    console.log(i, num)
  } while (incrementVariable() < num)
}

function incrementVariable() {
  return i += 1
}

