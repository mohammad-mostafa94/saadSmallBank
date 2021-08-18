function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const amountTextValue = inputValue.value;
    const amountValue = parseFloat(amountTextValue);
    inputValue.value = '';
    return amountValue;
}

document.getElementById("deposit-button").addEventListener("click",
function(){
    // handle deposit amount 

    // const depositInput = document.getElementById("deposit-input");
    // const depositAmountText = depositInput.value;
    const depositAmount =  getInputValue("deposit-input");

    // 
    const depositTotal = document.getElementById("depositTotal");
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);
    depositTotal.innerText = depositAmount + previousDepositTotal;

    // clear the deposit input field
    // depositInput.value = '';

    // get total balance 
    const balanceTotal = document.getElementById("balanceTotal");
    const previousBalanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotalText);
    const currentTotalBalance = newBalanceTotal + depositAmount;
    balanceTotal.innerText = currentTotalBalance;


})
// handle withdraw Button

document.getElementById("withdraw-button").addEventListener('click',function(){
    // const withdrawInput = document.getElementById("withdraw-input");
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');
    
    const withdrawTotal = document.getElementById("withdrawTotal");
    const previousWithdrawAmountText =(withdrawTotal).innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    withdrawTotal.innerText = previousWithdrawAmount + withdrawAmount;
    // console.log(previousWithdrawAmount);
    // get total balance with withdraw
    const balanceTotal = document.getElementById("balanceTotal");

    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    balanceTotal.innerText = previousBalanceTotal  - withdrawAmount;
    
    // clear withdraw field
    withdrawInput.value = '';
})














