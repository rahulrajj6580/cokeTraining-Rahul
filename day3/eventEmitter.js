const EventEmitter = require('events');

class ShoppingCart extends EventEmitter {
    constructor(){
        super()
        this.items = [];
    }

    addItem(item){
        this.items.push(item);
        this.emit('itemAdded', item);
    }

    removedItem(item){
        const idx = this.items.indexOf(item);
        if(idx > -1){
            this.items.splice(idx,1);
            this.emit('itemRemoved', item)
        }
    }
}

const cart = new ShoppingCart();
cart.on('itemAdded',(item)=>{
    console.log(`item added: ${item}`);
})

cart.on('itemReamoved', (item)=>{
    console.log(`item removed : ${item}`);
})

cart.addItem('apple');
cart.removedItem('apple');