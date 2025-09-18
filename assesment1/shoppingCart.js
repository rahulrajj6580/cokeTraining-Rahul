class ShoppingCart {
    constructor(products){
        this.products = [];
    }
    
    
    addProduct(product){
        this.products.push(product);
    }
    
    removeProduct(productName){
        this.products = this.products.filter( p => p.name !== productName);
    }
    
    calculateTotal(){
        return this.products.reduce((total, p) => total + p.price,0)
    }
}

export default ShoppingCart;