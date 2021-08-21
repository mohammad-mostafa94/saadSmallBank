function getInput(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositInputAmountText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputAmountText);
    depositInput.value = '';
    return depositInputAmount;
}

function getAmountValue(amountId) {
    const depositAmountValue = document.getElementById(amountId);
    const depositAmountText = depositAmountValue.innerText;
    const depositAmount = parseFloat(depositAmountText);
    return depositAmount;
}

function getTotalBalance(balanceId,isAdd) {
    const balanceTotal = document.getElementById("balanceTotal");
    const balanceTotalText = balanceTotal.innerText;
    if (isAdd == true) {
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal + inputAmount;
    }
    if (isAdd == false) {
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal - inputAmount;
    }
}

document.getElementById("deposit-button").addEventListener("click", function () {
    // get input value
    const inputAmount = getInput("deposit-input");

    // get previous deposit value
    const depositAmountValue = document.getElementById("depositTotal");
    
    const amountValue = getAmountValue("depositTotal")
    
    depositAmountValue.innerText = inputAmount + amountValue;

    // get total valance 
    
    const balanceTotal = document.getElementById("balanceTotal");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + inputAmount;

    getTotalBalance("balanceTotal",true)
    
})

document.getElementById("withdraw-button").addEventListener("click", function () {
    const inputAmount =  getInput("withdraw-input");;

    const withdrawAmountValue = document.getElementById("withdrawTotal");
    const amountValue = getAmountValue("withdrawTotal")


    withdrawAmountValue.innerText = inputAmount + amountValue;

    // get total balance 
    const balanceTotal = document.getElementById("balanceTotal");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - inputAmount;

    // withdrawInput.value = '';
})








// function getInputValue(inputId) {
//     const inputValue = document.getElementById(inputId);
//     const amountTextValue = inputValue.value;
//     const amountValue = parseFloat(amountTextValue);
//     inputValue.value = '';
//     return amountValue;
// }

// function updateTotal(balanceTotalId, amount) {
//     // const totalField = document.getElementById("depositTotal");
//     const totalField = document.getElementById(balanceTotalId);
//     const previousTotalText = totalField.innerText;
//     const previousTotal = parseFloat(previousTotalText);
//     totalField.innerText = amount + previousTotal;
// }

// function getBalanceTotal() {
//     const balanceTotal = document.getElementById("balanceTotal");
//     // const balanceTotal = document.getElementById(balanceId);
//     const previousBalanceTotalText = balanceTotal.innerText;
//     const newBalanceTotal = parseFloat(previousBalanceTotalText);
//     return newBalanceTotal;
// }

// function updateBalance(amount, isAdd) {
//     const balanceTotal = document.getElementById("balanceTotal");

//     const newBalanceTotal = getBalanceTotal();
//     if (isAdd == true) {
//         const currentTotalBalance = newBalanceTotal + amount;
//         balanceTotal.innerText = currentTotalBalance;
//     } else {
//         const currentTotalBalance = newBalanceTotal - amount;
//         balanceTotal.innerText = currentTotalBalance;
//     }
// }
// document.getElementById("deposit-button").addEventListener("click",
//     function () {
//         // handle deposit amount 
//         const depositAmount = getInputValue("deposit-input");
//         if (depositAmount > 0) {
//             // get deposit total 
//             updateTotal("depositTotal", depositAmount);
//             updateBalance(depositAmount, true);
//         } else {
//             alert("Please enter acceptable input");
//         }
//     })
// // handle withdraw Button

// document.getElementById("withdraw-button").addEventListener('click', function () {
//     // get withdraw amount
//     const withdrawAmount = getInputValue('withdraw-input');
//     const currentBalanceTotal = getBalanceTotal();
//     if (withdrawAmount > 0 && withdrawAmount < currentBalanceTotal) {
//         // get withdraw total
//         updateTotal("withdrawTotal", withdrawAmount);
//         updateBalance(withdrawAmount, false);
//     } else {
//         alert("Please enter acceptable input");
//     }
// })