//define a recipe object
const recipes = {};

//define a function which updates the key-value pairs of the recipes object
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign(recipes, {key:value});
}
