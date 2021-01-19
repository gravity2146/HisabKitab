balance = Math.round(Math.random() * 1000);
document.querySelector(".balance").textContent = `You have left ${balance} rs`;

document.querySelector(".debit").addEventListener("click", function () {
  x = Number(document.querySelector(".value").value);
  balance = balance - x;
  document.querySelector(
    ".balance"
  ).textContent = `You have left ${balance} rs`;
});
document.querySelector(".credit").addEventListener("click", function () {
  x = Number(document.querySelector(".value").value);

  balance = balance + x;
  document.querySelector(
    ".balance"
  ).textContent = `You have left ${balance} rs`;
});
