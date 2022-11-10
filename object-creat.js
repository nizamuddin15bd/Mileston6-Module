// using object literal
const student = { name: 'Sakib al Hasan', job: 'criketer' };

//2. constructor
const person = new Object();
// console.log(person);

// 3.

// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.name);


// 4. class
class People {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
const peop = new People('Manus', 12, 'yellow');
// console.log(peop);


// function
function Manus(name) {
    this.name = name;
}
const man = new Manus('Nizam');
console.log(man);