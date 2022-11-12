// console.log(this);
const kibria = {
    id: 101,
    money: 5000,
    name: 'Nizam',
    treatDayArrow: ()=>{
        console.log(this)
    },
    treatDayInside: function(){
        console myArrow = ()=> console.log(this);
        myArrow();
    },
    treatDay: function (expense) {
        this.money = this.money - expense;
        console.log('hero0001',this);
        return this.money;
    },

}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}

function add (){
    console.log(this);
}
