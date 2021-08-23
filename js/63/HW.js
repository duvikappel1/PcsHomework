

(function(){
    'use strict';
   function createAccount(openBalance){
        return{
            balance: openBalance,
            transaction(amount){
               this.balance+=amount;
            }
        }
    }
    function transaction2(amount){
        this.balance+=amount;
    }
    
        const account1=createAccount(500);
        const account2=createAccount(1000);
        
        account1.transaction(10);
        account2.transaction(10);
        console.log(account1, account2);
        
        transaction2.call(account1, 10);
        transaction2.call(account2, 10);
        console.log(account1, account2);
    })();

    