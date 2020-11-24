/**
 * Codewars Kata
 * @see https://www.codewars.com/kata/5eb34624fec7d10016de426e
 */

const martingale = (startingBalance, games) => {
  let currentBalance = startingBalance;
  let betAmount = 100;

  for (let game of games) {
    if (game) {
      currentBalance = currentBalance + betAmount;
      betAmount = 100;
    } else {
      currentBalance = currentBalance - betAmount;
      betAmount = betAmount * 2;
    }
  }

  console.log(currentBalance);
  return currentBalance;
};

// tests
console.log(martingale(1000, [1, 1, 0, 0, 1]), 1300);
console.log(martingale(500, []), 500);
console.log(martingale(0, [0, 0, 0, 0, 1, 0, 0]), -200);
