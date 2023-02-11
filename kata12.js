/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 10 2023
-------------------------------------------------------------
The Great Codeville Bake-off
We need to complete a function called chooseRecipe(), which will 
receive three parameters: - An array of ingredients in stock at 
Bakery A - An array of ingredients in stock at Bakery B - An array of 
recipe objects. Each recipe has a name property(string) and an ingredient
 property(array)
We are limiting our search to two ingredient recipes. We want to find a 
recipe that utilizes one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.
There will always be a single correct answer, and you will NOT need to 
consider special cases. For example, you do NOT need to worry about 
cases where one bakery has BOTH the ingredients for a recipe.

finding matching values in 2 arrays
** https://daily-dev-tips.com/posts/javascript-match-values-in-two-arrays/#:~:text=JavaScript%20finding%20match%20values%20in%20two%20arrays&text=const%20array1%20%3D%20%5B1%2C%202,stating%20the%20numbers%201%2D6.

*/

//
//expected:
//   input - 
//      bakeryA : array of ingredients
//      bakeryB : array of ingredients
//      recipes : array of recipe objects - property(string) property(array)
//   output - string (correct recipe)
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let recipe of recipes){
    if (ingredientCheck(bakeryA, recipe) && ingredientCheck(bakeryB, recipe)){
      return recipe.name;
    }
  }
}

//expected:
//   input - 
//      bakery : array of ingredients
//      recipes : array of recipe objects
//   output - bool based on array state
const ingredientCheck = function(bakery, recipe){
  // ** used source. checks for matching values in 2 arrays
  return Boolean((recipe.ingredients.filter((obj) => bakery.indexOf(obj) !== -1)).length)
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));