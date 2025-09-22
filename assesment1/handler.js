import readline from "readline";
import ShoppingCart from "./shoppingCart.js";
import Product from "./products.js";
import menu from "./menu.js";
import {validateString,validateNum} from "./priceValidation.js"

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
          rl.question(`Quantity of ${name}`, (quantity) =>{
            if(validateNum(price) && validateString(name) && validateNum(quantity)){
              cart.addProduct(new Product(name, price,quantity));
              console.log(`${quantity} ${name} added at $${price*quantity}`);
            }else{
              console.log('Invalid Inputs');  
            }
            callUserChoice();
          })
        });
      });
      break;

    case "2":
      console.log(cart.productList);
      if(!cart.productList){
        console.log('Cart is empty!')
      }else{
        const total = cart.calculateTotal();
        console.log(`Total price ${total}`);
      }
      callUserChoice();
      break;

    case '3':
      if (!cart.productList) {
        console.log('Cart is empty');
        callUserChoice();
      } else {

        rl.question("Enter product name to remove:", (name) => {
          cart.removeProduct(name);
          console.log(`product ${name} is removed`);
          callUserChoice();
        });
      }
      break;
    case '4':
      console.log(cart.productList);
      if(!cart.productList){
        console.log('Cart is empty');
      }else{
        cart.displayCartItems();
      }
      callUserChoice();
      break;

    case "5":
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
