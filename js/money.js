//step 1: get depostit btn and
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step 2 input field get and string value convert to number (perseFloat)
  const input_deposit = document.getElementById("deposit-field");
  const depositString = input_deposit.value;
  const deposit = parseFloat(depositString);
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
});
