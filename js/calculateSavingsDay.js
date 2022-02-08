function calculateSavingsDay() {
    var totalSavings;
    var inputSavingAmmount;
    var savingAmmountInt;
    var selectSavingFrequency;
    var savingFrequencyValue;
    var labelSavingResult;

    inputSavingAmmount = document.getElementById("savingAmmount").value;
    console.log("Saving ammount: " + inputSavingAmmount);

    inputPeriodAmmount = document.getElementById("savingPeriodNum").value;
    console.log("Period ammount: " + inputPeriodAmmount);

    selectSavingPeriod = document.getElementById('savingPeriod');
    savingPeriodValue = selectSavingPeriod.options[selectSavingPeriod.selectedIndex].value;
    console.log("Saving period:" + savingPeriodValue);

    selectSavingFrequency = document.getElementById('savingFrequency');
    savingFrequencyValue = selectSavingFrequency.options[selectSavingFrequency.selectedIndex].value;
    console.log("Saving freq:" + savingFrequencyValue);

    // How much you save per unit of time
    var savingFrequencyMultiplier;
    if (savingFrequencyValue == "day") {
        savingFrequencyMultiplier = 1;
    } else if (savingFrequencyValue == "month") {
        savingFrequencyMultiplier = 1 / 30;
    } else if (savingFrequencyValue == "year") {
        savingFrequencyMultiplier = 1 / 365;
    }
    var totalSavedPerDay = savingFrequencyMultiplier * inputSavingAmmount;

    // How many units of time you will save for
    var savingPeriodInDaysMultiplier;
    if (savingPeriodValue == "day") {
        savingPeriodInDaysMultiplier = 1;
    } else if (savingPeriodValue == "month") {
        savingPeriodInDaysMultiplier = 30;
    } else if (savingPeriodValue == "year") {
        savingPeriodInDaysMultiplier = 365;
    }
    var totalSavingPeriodInDays = savingPeriodInDaysMultiplier * inputPeriodAmmount;

    console.log("savingPeriodInDaysMultiplier: " + savingPeriodInDaysMultiplier);
    console.log("totalSavingPeriodInDays: " + totalSavingPeriodInDays);

    // Round numbers to 2nd decimal
    totalSavingsRaw = totalSavedPerDay * totalSavingPeriodInDays;
    totalSavings = totalSavingsRaw.toFixed(2);

    labelSavingResult = document.getElementById("savingResult");
    labelSavingResult.innerHTML = "If you save " + inputSavingAmmount + "€ per " + savingFrequencyValue + ", you will have saved " + totalSavings + "€ after " + inputPeriodAmmount + " " + savingPeriodValue;

}
