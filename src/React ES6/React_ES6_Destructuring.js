/* Destructuring
To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructuring makes it easy to extract only what is needed */

/* Before:

const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2]; */

/* With destructuring:
 */
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
console.log(car, truck, suv);


/* If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles; */

/* Destructuring Functions */

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);

  console.log(add, subtract, multiply, divide);


/* Destructuring Objects */
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    console.log(message);
  }


/* Destructuring Nested Objects  */

const vehicleTwo = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myVehicleTwo(vehicleTwo)
  
  function myVehicleTwo({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    console.log(message);
  }


  