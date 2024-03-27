
/* Stats */
let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE",55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const unitValues = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

/* Retrieve DOM elements */
const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

let cash;

/* Converts all drawer amounts to integers */
const convertToInteger = () => {
  for(const unit in cid) {
    cid[unit][1] *= 100;
  }
};

// convertToInteger();

/*
  Counts the total amount of change left in the entire drawer
*/
const getDrawerTotal = () => {
  return cid.reduce((unitSlot1, unitSlot2) => {
    return unitSlot1 + unitSlot2[1];
  }, 
  0);
};

/*
   Returns the amount to withdraw from a slot in the cash drawer given the remaining amount to pay
*/
const unitAmountToWithdraw = (leftToPay, drawerSlot) => {

  // Determine the maximum amount that can be taken out without breaking it

  const unitValue = unitValues[drawerSlot[0]] * 100;

  const unitAmount = drawerSlot[1] * 100;

  if(leftToPay < unitValue)
    return 0;
  
  const availableCount = Math.floor(unitAmount / unitValue);

  console.log(`${drawerSlot[0]} (${unitValue})`);

  console.log(`${drawerSlot[0]}, ${unitAmount}`);

  let amountUsed = 0;

  for(let i = 0; i < availableCount; i++) {
    amountUsed += amountUsed + unitValue > leftToPay ? 0 : unitValue;
  }

  console.log(`${drawerSlot[0]} = $${amountUsed / 100}`);

  return amountUsed;

};

/*
  Adjusts every slot in the drawer to determine if their is enough change
*/
const calculateChange = (cash) => {
  
  let change = cash - (price * 100);

  // Keep track of change amounts
  const changeAmounts = {

  };

  console.log("Change needed: $" + (change / 100));

  // Start with the largest at the end of the drawer
  for(let i = cid.length - 1; i >= 0; i--) {

    const slot = cid[i];

    const withdraw = unitAmountToWithdraw(change, slot);

    if(withdraw > 0)
      changeAmounts[slot[0]] = withdraw;

    change -= withdraw;

    cid[i][1] -= (withdraw / 100);

    // console.log("Use " + unitAmount[0] + " = " + withdraw);
  }

  // console.log("Final: " + change.toFixed(2));
  console.log("Final change left: $" + (change / 100));
  console.log(`Final drawer total: $${getDrawerTotal()}`);

  // Add a unique property to declare if not enough change was given
  if(change > 0) {
    changeAmounts["OUT_OF_CHANGE"] = true;
  }

  return changeAmounts;
};

/* Triggered on purchase */
const purchase = () => {
  
  if(cashInput.value.length <= 0) {
    cashInput.value = "0";
  }

  cash = parseFloat(cashInput.value) * 100;

  cashInput.value = "";

  // Ensure enough money paid
  if(cash < price * 100) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  // Exact cash means no change
  if(cash == price * 100) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  const changeAmounts = calculateChange(cash);
  const finalDrawerTotal = getDrawerTotal();

  if(!changeAmounts["OUT_OF_CHANGE"]) {
    // OPEN or CLOSED based on final drawer
    changeDue.innerHTML = `Status: ${finalDrawerTotal <= 0 ? "CLOSED " : "OPEN "}`;

    for(const unit in changeAmounts) {
      changeDue.innerHTML += `<span class="change">${unit}: $${changeAmounts[unit] / 100}</span> `;
    }
  }
  else {
    changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
  }
};

/* Add functionality */
purchaseBtn.addEventListener("click", purchase);
