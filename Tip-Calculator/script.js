
const billAmountElement = document.getElementById("billAmount");
const percentageTipElement = document.getElementById("percentageTip");
const tipAmountElement = document.getElementById("tipAmount");
const totalAmountElement = document.getElementById("totalAmount");
const errorMessageElement = document.getElementById("errorMessage");
const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", () => {
    const billAmount = parseFloat(billAmountElement.value);
    const percentageTip = parseFloat(percentageTipElement.value);

    if (isNaN(billAmount) || billAmount <= 0 || isNaN(percentageTip) || percentageTip < 0) {
        errorMessageElement.textContent = "Please enter valid, positive numbers for both fields.";
        tipAmountElement.value = "";
        totalAmountElement.value = "";
        return;
    }

    const tipAmount = (billAmount * percentageTip) / 100;
    const totalAmount = billAmount + tipAmount;

    tipAmountElement.value = tipAmount.toFixed(2);
    totalAmountElement.value = totalAmount.toFixed(2);
    errorMessageElement.textContent = "";
});
