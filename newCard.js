
const blue = {
  x: 400,
  y: 100
}

const green = {
  x: 20,
  y: 100
}

const distance = Math.sqrt((blue.x - green.x) * (blue.x - green.x) + (blue.y - green.y) * (blue.y - green.y))

console.log(distance);