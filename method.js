const student = {
    id: 101,
    money: 5000,
    name: 'Nizam',
    mejor: 'methmetic',
    isRich: true,
    subject: ['english', 'economic', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: ' mathmatice',
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDay: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }

}

student.takeExam();
const remaining1 = student.treatDay(900, 20);
const remaining2 = student.treatDay(100, 50);
console.log(remaining2);