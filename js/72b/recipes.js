(function () {
  'use strict';

  const recipeSelect = $('#recipes');
  const recipeNameElem = $('#recipe h2');
  const name = $('#name');
  const ingredients = $('#ingredients');
  const recipeIngredientsList = $('#recipe ul');
 

  async function loadChoices() {
    try {
      const response = await fetch('recipe.json');
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const choices = await response.json();
      if (choices) {
        choices.forEach(recipe => {
          recipeSelect.append(`<option value="${recipe.id}">${recipe.name}</option>`);
        });
    }
  }
      catch(e) {
      console.error('OOPS, ERROR', e);
    }
  }
    loadChoices();

     recipeSelect.change(async function () {
      console.log(this.value);
      const request = await fetch(`${this.value}.json`)
      if (!request) {
        throw new Error(`${request.status} ${request.statusText}`);
    }
      const recipe = await request.json();
      if(recipe){
      console.log(recipe);
     
    }
      recipeNameElem.text(recipe.name);
     // recipePictureElem.attr('src', recipe.picture);

      recipeIngredientsList.empty();
      ingredients.empty();
      name.empty();
      name.append(recipe.name)
      ingredients.append("Ingredients");
      recipe.ingredients.forEach(i => {
      recipeIngredientsList.append(`<li>${i}</li>`);
      })
    });
    
   
  
 
}());