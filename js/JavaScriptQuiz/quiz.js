//This is what I thought should work but it doesn't.
(function(){
  'use strict';

  const display = document.getElementById('orders');

  fetch('quiz.json')
    .then(r => r.json())
    .then(t => {
      t.forEach(order => {
        const item = new Item(order.items);
        // SL - we would probably really want to be saving all the orders in a array somewhere, not just creating them and calling print
        const order3 = new Order(order.customer, order.address, item);
        order3.print();
      });
    });


  class Item {

    constructor(items) {
      // SL - this class should represent a single item so wouldnt make sense to pass multiple items in to the ctor
      // even if we for some reason wanted to model "items" (which doesnt really make sense) how would looping through
      // and setting this.x be useful? this.x can only be one thing - and will be whatever last item data was
     for(let x=0; x < items.length; x++){
       this.item = item; // SL - what is item? Do you mean items[x]?
       this.price = price/quantity; // SL - what is price, quantity? Do you mean items[x].price, items[x].quantity?
       this.quantity = quantity; // SL - what is quantity? Do you mean items[x].quantity?
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

    print() {

      display.append(`customer: ${this.customerName} Address: ${this.customerAddress}`);
      for(let x = 0; x < this.item.length; x++){
        display.append(`item: ${this.item.item} quantity: ${this.item.quantity} price: ${this.item.price}`)
      }
    }
}

}())

// SL - looks to me like you need more practice. Have you been doing all the homeworks? I dont see them in your repo...