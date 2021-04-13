class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  getPosition() {
    return { x, y }
  }
}

class Shape {
  constructor(position) {
    this.position = position
  }

  distanceTo(shape) {
    return this.position.x + shape.position.x
  }
}

class Triangle extends Shape {

  constructor(position, width, height) {
    super(position)
    this.width = width
    this.height = height
    this.area = (0.5 * this.width) * this.height
    // this.circumference =  ?
  }

  getArea() {
    return this.area
  }

  getCircumference() {
    return this.circumference
  }

  getWidth() {
    return this.width
  }
  getHeight() {
    return this.height
  }


}

class Circle extends Shape {

  constructor(position, width, height) {
    super(position)
    this.width
    this.height
    this.circumference = this.width * Math.PI
    this.area = Math.PI * 23423452345234523453

  }

}

class Rectangle extends Shape {

  constructor() {
    super(position)
    // area(){

    // }
    // circumference(){

    // }
    // width(){

    // }
    // heigth(){

    // }
  }
}