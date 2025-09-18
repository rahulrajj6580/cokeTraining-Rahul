import readline from "readline";
import ShoppingCart from "./shoppingCart.js";
import Product from "./products.js";
import menu from "./menu.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cart = new ShoppingCart();

function userInput(input) {
  switch (input.trim()) {
    case "1":
      rl.question("Enter product name :", (name) => {
        rl.question("Enter product price :", (price) => {
          cart.addProduct(new Product(name, price));
          console.log(`product ${name} added at ${price}`);
          callUserChoice();
        });
      });
      break;

    case "2":
      const total = cart.calculateTotal();
      console.log(`Total price ${total}`);
      callUserChoice();
      break;

    case "3":
      console.log(`exiting`);
      rl.close();
      break;

    default:
      console.log(`invalid option`);
      callUserChoice();
      break;
  }
}

function callUserChoice() {
  menu();
  rl.question("enter your choice:", userInput);
}

callUserChoice();

// const product1 = new Product('Water bottle',20);
// const product2 = new Product('watch',2000);
// const product3 = new Product('rice',60);
// cart.addProduct(product1);
// cart.addProduct(product2);
// cart.addProduct(product3);

// console.log('Total price:', cart.calculateTotal());

// cart.removeProduct('rice');
// console.log(cart.products)
