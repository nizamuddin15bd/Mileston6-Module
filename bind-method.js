const kibria = {
    id: 101,
    money: 5000,
    name: 'Nizam',
    treatDay: function (expense) {
        this.money = this.money - expense;
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

// kibria.treatDay(100)

const heroTreatDay = kibria.treatDay.bind(heroBalam);
// heroTreatDay(300);
// heroTreatDay(500);
// kibria.treatDay(200);

const nizamuddin = kibria.treatDay.bind(nizam);
nizamuddin(100);