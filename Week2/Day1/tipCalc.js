// Coding challenge
//  John and his family went on a holliday and went to 3 differnt resturants. The bills wre $124, $48, $268.
// *
// * To tip the waiter a fair amount,john created a simple tip calculator (as a function). he likes to tip 20% of the bill when the bill is less than $50,
// * 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
// *
// * In the end, John would like to have 2 arrays:
// * 1. containing all three tips (one for each bill)
// * 2. contatining all three final paid amounts(bill + tip)

let bill = [124, 48, 268];
let totalBill = [];
let tips = [];

function tipCalculator() {
  for (i = 0; i <= bill.length - 1; i++) {
    if (bill[i] < 50) {
      totalBill.push(bill[i] + bill[i] * 0.2);
      tips.push(bill[i] * 0.2);
    } else if (bill[i] >= 50 && bill[i] <= 200) {
      totalBill.push(bill[i] + bill[i] * 0.15);
      tips.push(bill[i] * 0.15);
    } else {
      totalBill.push(bill[i] + bill[i] * 0.1);
      tips.push(bill[i] * 0.1);
    }
  }
  console.log(tips);
  console.log(totalBill);
}
tipCalculator(bill);

// const bill2 = [124, 48, 268];
// let tip2 = bill2.slice();
// console.log(tip2);
