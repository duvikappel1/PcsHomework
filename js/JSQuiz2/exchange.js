(async function (){
    'use strict';
    const button = $('button');
    const display = $('#display');
    const inputAmount = $('#inputAmount');
    const fromInput = $('#fromInput');
    const toInput = $('#toInput');
    const apiKey = ;
    

//Part 1
  
    async function loadCountries() {
      try {                                      
        const response = await fetch(`https://free.currconv.com/api/v7/countries?apiKey=${apiKey}`);
        //const response = await fetch('countries.json');
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
          return await response.json();
      }
      catch(e) {
        console.error('OOPS, ERROR', e);
        
      }
    }

    const countries = await loadCountries();
    console.log(countries);
          
    const responseExchangeUStoIsrl = await fetch(`https://free.currconv.com/api/v7/convert?q=USD_ILS&amp;compact=ultra&apiKey=${apiKey}`);
    //const responseExchangeUStoIsrl = await fetch('usIsrael.json');
    const exchangeUStoIsrl = await responseExchangeUStoIsrl.json();
    //console.log(exchangeUStoIsrl);
    //console.log(exchangeUStoIsrl.results.USD_ILS.val);
    for (const property in exchangeUStoIsrl.results) {
          console.log(exchangeUStoIsrl.results[property].val); 
          
        }
    //console.log(exchangeUStoIsrl.USD_ILS);

//Part 2          
          
     /*for (const property in countries.results) {
                
        fromInput.append(`<option value="${property}">${countries.results[property].name}/${countries.results[property].currencyName}</option>`);
        toInput.append(`<option value="${property}">${countries.results[property].name}/${countries.results[property].currencyName}</option>`);
                
      }
   
    
    button.click( async() => {
      //console.log(input.val())
      //console.log(input2.val())
      const amount = inputAmount.val();
      const fromCurrencyId = countries.results[fromInput.val()].currencyId;
      const fromCurrency = countries.results[fromInput.val()].currencyName;
      //console.log(fromCurrency);
      const toCurrencyId = countries.results[toInput.val()].currencyId;
      const toCurrency = countries.results[toInput.val()].currencyName;
      //console.log(toCurrency);
      //const toFrom= fromCurrency+'_'+toCurrency;
      //console.log(toFrom);
                
      const exchangeRateResponse = await fetch(`https://free.currconv.com/api/v7/convert?q=${fromCurrencyId}_${toCurrencyId}&amp;compact=ultra&apiKey=${apiKey}`);
      const exchangeRate = await exchangeRateResponse.json();
      //console.log(z);
      console.log(exchangeRate);
          for (const property in exchangeRate.results) {
                //const exchangeInstance = new Exchange(exchangeRate.results[property].id,exchangeRate.results[property].val, exchangeRate.results[property].fr, exchangeRate.results[property].to);
                //console.log(exchangeInstance.toCountry);
                const rate =exchangeRate.results[property].val*amount;
                console.log(rate);
                display.text(`The exchange rate of ${amount} ${fromCurrency} to  ${toCurrency} is ${rate} ${toCurrency}`);
                //console.log(x.results[property].val); 
               //display.text(`The exchange rate of ${ exchangeInstance.fromCountry} to  ${exchangeInstance.toCountry} is ${l} `);
          }
              
                

    })*/;

//Part 3

      class Countries {
          constructor(currencyId, currencyName, countryName){
            this.id = currencyId;
            this.currencyName = currencyName;
            this.countryName = countryName;
          }
      }

      class Exchange {
            constructor(id, val, fromCountry, toCountry) {
              this.id = id;
              this.exchangeRate = val;
              this.fromCountry = fromCountry;
              this.toCountry = toCountry;
            }
      } 

      
      let countryArray=[];

      for (const property in countries.results) {
          countryArray.push(new Countries(countries.results[property].currencyId, countries.results[property].currencyName, countries.results[property].name));    
          
      }
      console.log(countryArray);
      for(let i = 0; i < countryArray.length; i++){ 
          fromInput.append(`<option value="${i}">${countryArray[i].countryName}/${countryArray[i].currencyName}</option>`);
          toInput.append(`<option value="${i}">${countryArray[i].countryName}/${countryArray[i].currencyName}</option>`);
      }
      
              
      button.click( async() => {
        const amount = inputAmount.val();
        const fromCurrencyId = countryArray[fromInput.val()].id;
        const fromCurrency = countryArray[fromInput.val()].currencyName;
        const toCurrencyId = countryArray[toInput.val()].id;
        const toCurrency = countryArray[toInput.val()].currencyName;
        
        
                        
        const exchangeRateResponse = await fetch(`https://free.currconv.com/api/v7/convert?q=${fromCurrencyId}_${toCurrencyId}&amp;compact=ultra&apiKey=${apiKey}`);
        const exchangeRate = await exchangeRateResponse.json();
        let exchangeInstance;

        for (const property in exchangeRate.results) {
             exchangeInstance = new Exchange(exchangeRate.results[property].id,exchangeRate.results[property].val, exchangeRate.results[property].fr, exchangeRate.results[property].to);
            
        }
        console.log(exchangeInstance );
        const rate = exchangeInstance.exchangeRate*amount;
        display.text(`The exchange rate of ${amount} ${fromCurrency} to  ${toCurrency} is ${rate} ${toCurrency}`);
                                   
      });               
           
}());