const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
};
/*
for (let i = 0; i< 10; i++){}
for (const num of number){} // array jonno use koro
for (const prop in student){} // object ar jonno use hoi
*/

for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}


const keys = Object.keys(bottle);
// console.log(keys);

for (const prop of keys) {
    // console.log(prop, bottle[prop]);
};

// advenced
const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}