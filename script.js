// 1st Exercise
let groceryList = [];

groceryList[0] = "Milk";
groceryList[1] = null;
groceryList[2] = "Veggies";
groceryList[3] = null;
groceryList[4] = "Bread";

console.log(groceryList.length);

groceryList[groceryList.length] = "Fruits";
groceryList[groceryList.length] = "Beef";

console.log(groceryList.length);

// 2nd Exercise
let shoppingCart = [];

shoppingCart.push("Butter", "Jelly", "Pasta")
console.log(shoppingCart);

let removedItem = shoppingCart.pop();
console.log(removedItem)
console.log(shoppingCart)
