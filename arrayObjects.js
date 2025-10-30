let chaiTypes = ['masala chai', 'ginger chai', 'green tea', 'lemon tea'];

console.log(chaiTypes[2]);
console.log(`Total chai types: ${chaiTypes.length}`);
chaiTypes.push('herbal tea'); //inserts a new value at the end of the array

console.log(chaiTypes);
console.log(chaiTypes.pop());
//remove element from end of array
// what does it return -> it doesn't return the remaining values -> it return the value that has been popped out

let index = chaiTypes.indexOf('green tea');
console.log(index);

//indexOf can also return -1: meaning . If the search value doesn't exist anywhere in the string, the method returns -1 as an indicator of "not found"

if (index != -1) {
  chaiTypes.splice(index, 1);
}
//-1 :
console.log(chaiTypes);

//forEach : give u a callback function
chaiTypes.forEach((chai, index) => {
  console.log(`${index + 1}:${chai}`);
});

let moreChaiTypes = ['Oolong tea', 'White tea'];
//now how do we merge two arrays?
let allChaiTypes = chaiTypes.concat(moreChaiTypes);
console.log(allChaiTypes);

//or

let newAllChaiTypes = [...chaiTypes, 'Chamoline Tea'];
//The `...` (spread syntax) **unpacks** elements from an array or object and **inserts** them into a new array or object.
// new array ka first item hai- existing array ko poora spread krdo aap and dusra element hoga jo humne add kiya hai

console.log(newAllChaiTypes);

//Object literals
let chaiRecipe = {
  name: 'masala chai',
  ingredients: {
    teaLeaves: 'Assam tea',
    milk: 'full creame',
    sugar: 'brown sugar',
    spices: ['daalchini', 'ginger'],
  },
  instruction: 'Boil Water, add tealeaves, milk, sugar and spices',
};

console.log(chaiRecipe.name);
console.log(chaiRecipe.ingredients.spices[1]);

