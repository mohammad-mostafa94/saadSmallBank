function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const amountTextValue = inputValue.value;
    const amountValue = parseFloat(amountTextValue);
    inputValue.value = '';
    return amountValue;
}

function updateTotal(balanceTotalId, amount) {
    // const totalField = document.getElementById("depositTotal");
    const totalField = document.getElementById(balanceTotalId);
    const previousTotalText = totalField.innerText;
    const previousTotal = parseFloat(previousTotalText);
    totalField.innerText = amount + previousTotal;
}

function getBalanceTotal() {
    const balanceTotal = document.getElementById("balanceTotal");
    // const balanceTotal = document.getElementById(balanceId);
    const previousBalanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotalText);
    return newBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById("balanceTotal");
    
    const newBalanceTotal = getBalanceTotal();
    if (isAdd == true) {
        const currentTotalBalance = newBalanceTotal + amount;
        balanceTotal.innerText = currentTotalBalance;
    } else {
        const currentTotalBalance = newBalanceTotal - amount;
        balanceTotal.innerText = currentTotalBalance;
    }
}
document.getElementById("deposit-button").addEventListener("click",
    function () {
        // handle deposit amount 
        const depositAmount = getInputValue("deposit-input");
        if (depositAmount > 0) {
            // get deposit total 
            updateTotal("depositTotal", depositAmount);
            updateBalance(depositAmount, true);
        } else {
            alert("Please enter acceptable input");
        }
    })
// handle withdraw Button

document.getElementById("withdraw-button").addEventListener('click', function () {
    // get withdraw amount
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalanceTotal = getBalanceTotal();
    if (withdrawAmount > 0 && withdrawAmount < currentBalanceTotal) {
        // get withdraw total
        updateTotal("withdrawTotal", withdrawAmount);
        updateBalance(withdrawAmount, false);
    } else {
        alert("Please enter acceptable input");
    }
})