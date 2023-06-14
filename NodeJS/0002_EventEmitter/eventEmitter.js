import events from 'events';

function Account() {
    this.credit = 0;
    events.EventEmitter.call(this);
    this.increase = function(amount) {
        this.credit += amount;
        this.emit('creditIncreased', amount);
    }
    this.decrease = function(amount) {
        this.credit -= amount;
        this.emit('creditDecreased', amount);
    }
}

Account.prototype.__proto__ = events.EventEmitter.prototype;

function DisplayCreditIncrease(amount) {
    console.log(`${amount} credit Increased. Total Credit : ${this.credit}`);
}

function DisplayCreditDecrease(amount) {
    console.log(`${amount} credit Decreased. Total Credit : ${this.credit}`);
}

const myAccount = new Account();
myAccount.on('creditIncreased',DisplayCreditIncrease);
myAccount.on('creditDecreased',DisplayCreditDecrease);

myAccount.increase(100);
myAccount.decrease(50);