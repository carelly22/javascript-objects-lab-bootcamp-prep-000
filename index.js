//define a recipe object
const recipes = {};

//define a function which updates the key-value pairs of the recipes object
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign(recipes, {key:value});
};

//define a function which destructively updates the recipes object
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}
