let balance = 0;
let transactions = [];

const balanceEl = document.getElementById('balance');
const transactionListEl = document.getElementById('transactionList');

// Initialize
function init() {
    balance = 0;
    transactions = [];
    updatebalance();
    renderTransactions()
}

function updatebalance() {
    balanceEl.textContent = `$${balance.toFixed(2)}`;
}

// Transaction handling
function addTransaction(type, amount) {
    const transaction = {id: Date.now(),date: new Date().toLocaleString(),type,amount,balanceAfter: balance
    };
    transactions.unshift(transaction);
    renderTransactions()
}

 
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

// Add money

function handleAdd() {
    const amountInput = document.getElementById('addAmount');
    const amount = parseFloat(amountInput.value);
    
    if (isNaN(amount)) {
        document.getElementById('addError').textContent = 'Please enter a valid number';
        return;
    }
    
    if (amount <= 0) {
        document.getElementById('addError').textContent = 'Amount must be positive';
        return;
    }

    balance += amount;
    updatebalance();
    addTransaction('Deposit', amount);
    hideModals();
    amountInput.value = '';
}


// Withdraw money

function handleWithdraw() {
    const amountInput = document.getElementById('withdrawAmount');
    const amount = parseFloat(amountInput.value);
    
    if (isNaN(amount)) {
        document.getElementById('withdrawError').textContent = 'Please enter a valid number';
        return;
    }
    
    if (amount <= 0) {
        document.getElementById('withdrawError').textContent = 'Amount must be positive';
        return;
    }

    if (amount > balance) {
        document.getElementById('withdrawError').textContent = 'Insufficient funds';
        return;
    }

    balance -= amount;
    updatebalance();
    addTransaction('Withdrawal', -amount);
    hideModals();
    amountInput.value = '';
}


// Transaction history
function renderTransactions() {
    transactionListEl.innerHTML = transactions.map(transaction => `
        <tr class="border-b">
            <td class="py-2">${transaction.date}</td>
            <td class="${transaction.type === 'Deposit' ? 'text-green-500' : 'text-red-500'}">
                ${transaction.type}
            </td>
            <td>${transaction.amount > 0 ? '+' : ''}${transaction.amount.toFixed(2)}</td>
        </tr>
    `).join('');
}

function showTransactions() {
    const mainPage = document.getElementById('dashboard');
    const transactionListSection = document.getElementById('transactions');
    if (mainPage && transactionListSection) {
        mainPage.classList.add('hidden');
        transactionListSection.classList.remove('hidden');
    } else {
        console.error('Element(s) not found');
    }
}

function hideTransactions() {
    const mainPage = document.getElementById('dashboard');
    const transactionListSection = document.getElementById('transactions');
    if (mainPage && transactionListSection) {
        transactionListSection.classList.add('hidden');
        mainPage.classList.remove('hidden');
    } else {
        console.error('Element(s) not found');
    }
}

 
init();



