//This is what I thought should work but it doesn't.
(function(){
  'use strict';
  
  const display = document.getElementById('orders');

  fetch('quiz.json')
    .then(r => r.json())
    .then(t => {
      t.forEach(order => { 
        const item = new Item(order.items);
        const order3 = new Order(order.customer, order.address, item);
        order3.print();
        order3.Total;
      });
    });
  

  class Item {
    
    constructor(items) {
     for(let x=0; x < items.length; x++){
       this.item = items[x].item;
       this.price = items[x].price/items[x].quantity;
       this.quantity = items[x].quantity;
       }   
    }

    print() {
      display.append(`The price for ${this.name} is ${this.price}. There are ${this.quantity} in stock.`);
    }
}

  class Order {
    
    constructor(customerName, customerAddress, item) {
      this.customerName = customerName;
      this.customerAddress = customerAddress;
      this.item = item;

    }
    get Total(){
      let total;
      for(let j = 0; j < this.item; j++){
            total += this.item[j].quantiy*this.item[j].price;
      }  
      display.append(total);
    }

    print() {
       
      display.append(`customer: ${this.customerName} Address: ${this.customerAddress}`);
      for(let x = 0; x < this.item.length; x++){
        display.append(`item: ${this.item[x].item} quantity: ${this.item[x].quantity} price: ${this.item[x].price}`) 
      }
      
      
    }
}

}())