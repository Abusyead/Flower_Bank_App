let balance = 0;
let transactions = [];

const balanceEl = document.getElementById('balance');
const transactionListEl = document.getElementById('transactionList');

// Initialize
function init() {
    balance = 0;
    transactions = [];
    updateBalance(); 
}