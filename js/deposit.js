document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field')
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    const currentDepositTotal = previousdepositTotal + newdepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    const blanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = blanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newdepositAmount;

    blanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})