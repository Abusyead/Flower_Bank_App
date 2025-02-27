let balance = 0;
let transactions = [];

const balanceEl = document.getElementById('balance');
const transactionListEl = document.getElementById('transactionList');

// Initialize
function init() {
    balance = 0;
    transactions = [];
    updatebalance(); 
}

function updatebalance() {
    balanceEl.textContent = `$${balance.toFixed(2)}`;
}

// Transaction handling
function addTransaction(type, amount) {
    const transaction = {id: Date.now(),date: new Date().toLocaleString(),type,amount,balanceAfter: balance
    };
    transactions.unshift(transaction);
}

// Modal handling
function showModal(type) {
    document.getElementById(`${type}Modal`).classList.remove('hidden');
}

function hideModals() {
    document.querySelectorAll('[id$="Modal"]').forEach(modal => {
        modal.classList.add('hidden');
    });
    clearErrors();
}

function clearErrors() {
    document.querySelectorAll('[id$="Error"]').forEach(el => {
        el.textContent = '';
    });
}
