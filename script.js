// 1st Exercise
let groceryList = [];

groceryList[0] = "Milk";
groceryList[1] = "Cheese";
groceryList[2] = "Veggies";
groceryList[3] = "Eggs";
groceryList[4] = "Bread";

console.log(groceryList.length);

groceryList[1] = null;
groceryList[3] = null;

groceryList.length = 7;

groceryList[5] = "Fruits";
groceryList[6] = "Beef";

console.log(groceryList.length);
console.log(groceryList);

// 2nd Exercise
let shoppingCart = [];

shoppingCart.push("Butter", "Jelly", "Pasta");
console.log(shoppingCart);

let removedItem = shoppingCart.pop();
console.log(removedItem);
console.log(shoppingCart);

// 3rd Exercise
let avatarElements = ["Water", "Earth", "Fire", "Air", "Energy"];

for (let avatarElement = 0; avatarElement < avatarElements.length; avatarElement++) {
    console.log("Does the Avatar know " + avatarElements[avatarElement] + "?")
    if (avatarElement < 4) {
    console.log("The Avatar can bend all elements, including " + avatarElements[avatarElement]);
    } else {
        console.log("The Avatar cannot yet bend the element " + avatarElements[avatarElement])
    }
}