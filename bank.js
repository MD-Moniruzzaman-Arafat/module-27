// get input
function getInput(name) {
    const input = document.getElementById(name + '-input');
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);
    // clear the deposit input field
    input.value = '';
    return inputAmount;
}
// get total
function getTotal(name, depositAmount) {
    const depositTotal = document.getElementById(name + '-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositAmount = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositAmount;
}
// balance total
function balanceTotal(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    if (isAdd == true) {
        const newBalanceTotalAmount = previousBalanceTotalAmount + amount;
        balanceTotal.innerText = newBalanceTotalAmount;
    } else {
        const newBalanceTotalAmount = previousBalanceTotalAmount - amount;
        balanceTotal.innerText = newBalanceTotalAmount;
    }

}


// handle deposit button
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    // get the amount deposit
    // const depositInput = document.getElementById('deposit-input');
    // const depositText = depositInput.value;
    // const depositAmount = parseFloat(depositText);
    const depositAmount = getInput('deposit');
    // deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepositAmount = previousDepositAmount + depositAmount;
    // depositTotal.innerText = newDepositAmount;
    if (depositAmount > 0) {
        getTotal('deposit', depositAmount);
        balanceTotal(depositAmount, true);
    }
    // balance total
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    // const newBalanceTotalAmount = previousBalanceTotalAmount + depositAmount;
    // balanceTotal.innerText = newBalanceTotalAmount;




});

// handle withdraw button
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    // get the amount withdraw
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawText);
    const withdrawAmount = getInput('withdraw')
    // withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    // const newWithdrawAmount = previousWithdrawTotalAmount + withdrawAmount;
    // withdrawTotal.innerText = newWithdrawAmount;
    if (withdrawAmount > 0) {
        balanceTotal(withdrawAmount, false);
        getTotal('withdraw', withdrawAmount);
    }
    // balance total
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    // const newBalanceTotalAmount = previousBalanceTotalAmount - withdrawAmount;
    // balanceTotal.innerText = newBalanceTotalAmount;




    // // clear the deposit input field
    // withdrawInput.value = '';
})