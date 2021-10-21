(function () {
    'use strict';
  
    const addContactForm = get('addContactForm');
    const contactsTable = get('contactsTable');
    const firstNameInput = get('first');
    const lastNameInput = get('last');
    const addressInput = get('address');
    const checkbox = document.getElementById('checkbox');
    
    const contacts = [];
  
    function get(id) {
      return document.getElementById(id);
    }
  
    
    
    addContactForm.addEventListener('submit', event => {
      event.preventDefault();
    
 
      const newContact = {
        first: firstNameInput.value,
        last: lastNameInput.value,
        address: addressInput.value,
        
      };
  
      contacts.push(newContact);
  
      const row = contactsTable.insertRow();
      const firstNameCell = row.insertCell();
      const lastNameCell = row.insertCell();
      const addressCell = row.insertCell();
      
  
      firstNameCell.innerText = newContact.first;
      lastNameCell.innerText = newContact.last;
      addressCell.innerText = newContact.address;
     
  
      
      hideAndResetAddContactForm();
    }
    );
  
    
  
    function hideAndResetAddContactForm() {
      addContactForm.reset();
      
    }
  }());