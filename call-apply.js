const kibria = {
    id: 101,
    money: 5000,
    name: 'Nizam',
    treatDay: function (expense, boksis, tex) {
        this.money = this.money - expense- boksis - tex;
        console.log('hero0001',this);
        return this.money;
    }

}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}
const nizam = {
    id: 102,
    money: 10000,
    name: 'Nizma',
}

// call
// kibria.treatDay.call(heroBalam,500, 100, 50);
// kibria.treatDay.call(heroBalam, 300, 100, 50);

// apply
kibria.treatDay.apply(heroBalam,[500, 100, 50])
kibria.treatDay.apply(heroBalam,[500, 100, 50])

kibria.treatDay.apply(nizam,[500, 100,50]);