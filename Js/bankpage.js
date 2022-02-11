// function doubleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

// button input
function getInputValue(inputId) {
    const depositeInput = document.getElementById(inputId);
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);

    // clear input field
    depositeInput.value = '';

    return depositeAmount;
}

// update deposite and withdraw total
function updateTotalField(totalFieldId, depositeAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + depositeAmount;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const prevoiusBalanceTotal = parseFloat(balanceTotalText);
    return prevoiusBalanceTotal;

}

function updateBalance(depositeAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*  const balanceTotalText = balanceTotal.innerText;
    const prevoiusBalanceTotal = parseFloat(balanceTotalText); */
    const prevoiusBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = prevoiusBalanceTotal + depositeAmount;
    }
    else {
        balanceTotal.innerText = prevoiusBalanceTotal - depositeAmount;
    }

}


document.getElementById('deposite-button').addEventListener('click', function () {
    // const depositeInput = document.getElementById('deposite-input');
    // const depositeAmountText = depositeInput.value;
    // depositeAmount = parseFloat(depositeAmountText);



    // get and update deposite total
    /* const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositeTotal + depositeAmount;
 */

    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const prevoiusBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = prevoiusBalanceTotal + depositeAmount; */
    const depositeAmount = getInputValue('deposite-input');
    if (depositeAmount > 0) {
        updateTotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    // get and update withdraw total

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);


    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
 */



    // update balance after withdraw

    /* onst balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const prevoiusBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = prevoiusBalanceTotal - withdrawAmount;
 */
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not get more than you have in your account');
    }

});
