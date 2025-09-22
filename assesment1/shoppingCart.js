class ShoppingCart {
    constructor(productList){
        this.productList = new Map();
    }
    
    
    addProduct(product){
        console.log("Adding product:::",product);
        this.productList.set(product.name,product);

    }
    
    removeProduct(productName){
        this.productList.delete(productName);
    }
    
    calculateTotal(){
        let total =0;
        for(let product of this.productList.values()){
            total += product.price * product.quantity;
        }
        return total;
    }

    displayCartItems(){
        for(const [name, product] of this.productList){
            console.log(`Product:${name}, Price:${product.price}`);
        }
    }
}

export default ShoppingCart;