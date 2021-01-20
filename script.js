let balance = Math.round(Math.random() * 1000) - 500;
document.querySelector(".balance").textContent = `You have left ${balance} rs`;
let x = 0;
document.querySelector(".debit").addEventListener("click", function () {
  x = Number(document.querySelector(".value").value);
  balance = balance - x;
  balance > 0
    ? (document.querySelector(".balance").style.color = "green")
    : (document.querySelector(".balance").style.color = "red");
  document.querySelector(
    ".balance"
  ).textContent = `You have left ${balance} rs`;
});
document.querySelector(".credit").addEventListener("click", function () {
  x = Number(document.querySelector(".value").value);
  balance = balance + x;
  balance > 0
    ? (document.querySelector(".balance").style.color = "green")
    : (document.querySelector(".balance").style.color = "red");
  document.querySelector(
    ".balance"
  ).textContent = `You have left ${balance} rs`;
});
balance > 0
  ? (document.querySelector(".balance").style.color = "green")
  : (document.querySelector(".balance").style.color = "red");
document.querySelector(".balance");
