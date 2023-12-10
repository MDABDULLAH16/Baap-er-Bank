//deposit code
//step 1: get depostit btn and
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step 2 input field get and string value convert to number (perseFloat)
  const input_deposit = document.getElementById("deposit-field");
  const depositString = input_deposit.value;
  const deposit = parseFloat(depositString);
  if (isNaN(deposit)) {
    alert("please input valid number ");
    return;
  }
  //   console.log(typeof deposit);

  // step 3: get main rest deposit
  const getTotalDeposit = document.getElementById("total-deposit");
  // step 4: as a string , get it by innerText and convert perseFloat
  const restDepositString = getTotalDeposit.innerText;
  const restDeposit = parseFloat(restDepositString);
  //step 5: input deposit and rest deposit added as an innertext
  const totalDeposit = deposit + restDeposit;
  getTotalDeposit.innerText = totalDeposit;
  //step 6: emety the input field
  input_deposit.value = "";
  //get main banalce
  const getBalance = document.getElementById("balance");
  const banalceSting = getBalance.innerText;
  const restBanalce = parseFloat(banalceSting);
  const totalBalance = deposit + restBanalce;
  getBalance.innerText = totalBalance;
});

// withdraw
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const inputWithdrawString = withdrawField.value;
  const inputWithdraw = parseFloat(inputWithdrawString);
  //   console.log(typeof inputWithdraw, inputWithdraw);
  withdrawField.value = "";
  if (isNaN(inputWithdraw)) {
    alert("please input valid number ");
    return;
  }

  const getTotalWithdraw = document.getElementById("total-withdraw");
  const totalWithdrawString = getTotalWithdraw.innerText;
  const restTotalWithdraw = parseFloat(totalWithdrawString);
  //set withdraw total
  //   const totalWithdraw = inputWithdraw + restTotalWithdraw;
  //   getTotalWithdraw.innerText = totalWithdraw;

  //   main balace
  const getBalance = document.getElementById("balance");
  const banalceSting = getBalance.innerText;
  const restBanalce = parseFloat(banalceSting);

  if (inputWithdraw > restBanalce) {
    alert("Baaper Bank a ato taka nai");
    return;
  }
  //set withdraw total for error handling

  const totalWithdraw = inputWithdraw + restTotalWithdraw;
  getTotalWithdraw.innerText = totalWithdraw;
  const totalBalance = restBanalce - inputWithdraw;
  getBalance.innerText = totalBalance;
});
