const fs = require('fs')
const htmlString = fs.readFileSync('./gistfile1.txt', {
  encoding: 'utf8'
})

console.log(htmlString)

class Product {

  constructor(name, price, salesratio) {
    this.name = name
    this.price = price
    this.salesratio = salesratio
  }

  getName() {
    return this.name
  }
  setName(newName) {
    this.name = newName
  }
  getPrice() {
    return this.price
  }
  setPrice(newPrice) {
    this.price = newPrice
  }
  getSalesRatio() {
    return this.salesratio
  }
  setSalesRatio(ratio) {
    this.salesratio = ratio
  }
  getSalesPrice() {
    return this.price - this.price * this.salesratio
  }
}


const car = new Product("Audi", 15, 0.25)

console.log(car.getSalesPrice());
console.log(car.getName());
console.log(car.getPrice());
car.setName('Volvo')
car.setPrice(8)
console.log(car.getName());

// class Request {

//   constructor(httpString) {
//     // path(){

//     // }


//   }



// }