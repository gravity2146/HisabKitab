// function getData(){
//   firebase.database.user.ref('/').once('value',function(snapshot){
//       snapshot.forEach(function(childsnapshot){
//         var childKey = childsnapshot.key;
//         var childData = childsnapshot.val();
//         console.log(childKey,childData);
//       })
//   })
// }

// const db = firebase.database().ref().child("object");
// db.on("value", (a) => console.log(a.val()));
// let list =[]

let balance = Math.round(Math.random() * 1000) - 500;
document.querySelector(".balance").textContent = `You have left ${balance} rs`;
let x = 0;
let names = "";
document.querySelector(".debit").addEventListener("click", function () {
  x = Number(document.querySelector(".value").value);
  var keys = Object.keys(l[1]);
  balance = balance - x;
  balance > 0
    ? (document.querySelector(".balance").style.color = "green")
    : (document.querySelector(".balance").style.color = "red");
  document.querySelector(
    ".balance"
  ).textContent = `You have left ${balance} rs`;
  if (keys.includes(names)) {
    firebase
      .database()
      .ref("user")
      .update({ [names]: balance });
  }
});
document.querySelector(".credit").addEventListener("click", function () {
  x = Number(document.querySelector(".value").value);
  var keys = Object.keys(l[1]);
  balance = balance + x;
  balance > 0
    ? (document.querySelector(".balance").style.color = "green")
    : (document.querySelector(".balance").style.color = "red");
  document.querySelector(
    ".balance"
  ).textContent = `You have left ${balance} rs`;
  if (keys.includes(names)) {
    firebase
      .database()
      .ref("user")
      .update({ [names]: balance });
  }
});
document.querySelector(".set").addEventListener("click", function () {
  var keys = Object.keys(l[1]);
  names = document.querySelector(".name").value;
  if (keys.includes(names)) {
    console.log(names);
    balance = l[1][names];
    console.log(balance);
    document.querySelector(
      ".balance"
    ).textContent = `You have left ${balance} rs`;
    balance > 0
      ? (document.querySelector(".balance").style.color = "green")
      : (document.querySelector(".balance").style.color = "red");
    document.querySelector(".balance");
  }
});
balance > 0
  ? (document.querySelector(".balance").style.color = "green")
  : (document.querySelector(".balance").style.color = "red");
document.querySelector(".balance");

// document.querySelector(".set").addEventListener("click", function () {
//   let name = document.querySelector(".name").value;
//   console.log(l[1][name]);
//   balance = l[1][name];
//   console.log(balance);
// });
