const bottle = { color: 'yellow', hold: 'water', price: 50, isClean: true };

// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

// get all values
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);
// Object.seal(bottle); // seal marla delete kora jaina
Object.freeze(bottle); // kono kecu change korar sujok nai
bottle.price = 100; // change kora jai
bottle.height = 16; // new add kora jaina
delete bottle.isClean;
console.log(bottle);