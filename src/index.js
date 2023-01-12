import { dapp } from "../../declarations/dapp";


document.querySelector("form").addEventListener("submit", async function(event){
  var n1 = parseInt(document.getElementById("a").value);
  var n2 = parseInt( document.getElementById("b").value);
  var ope = document.getElementById("ope").value;
  const button = event.target.querySelector("#submit");
  button.setAttribute("disabled", true);
  var output;
  switch(ope){
    case "sum":
      output = await dapp.add(n1,n2);
      document.getElementById("output").innerText=output;
      break;
    case "sub":
        output = await dapp.sub(n1,n2);
        document.getElementById("output").innerText=output;
        break;
        case "mul":
          output = await dapp.mul(n1,n2);
          document.getElementById("output").innerText=output;
          break;
          case "div":
      output = await dapp.div(n1,n2);
      document.getElementById("output").innerText=output;
      break;  
      case "mod":
        output = await dapp.mod(n1,n2);
        document.getElementById("output").innerText=output;
        break;    
    default:
      console.log("bad");  
  }
   button.removeAttribute("disabled");
})

// window.addEventListener("load", async function() {
//   // console.log("Finished loading");
//   update();
// });

// document.querySelector("form").addEventListener("submit", async function(event) {
//   event.preventDefault();
//   // console.log("Submitted.");

//   const button = event.target.querySelector("#submit-btn");

//   const inputAmount = parseFloat(document.getElementById("input-amount").value);
//   const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

//   button.setAttribute("disabled", true);

//   if (document.getElementById("input-amount").value.length != 0) {
//     await dapp.topUp(inputAmount);
//   }

//   if (document.getElementById("withdrawal-amount").value.length != 0) {
//     await dapp.withdraw(outputAmount);
//   }

//   await dapp.compound();

//   update()

//   document.getElementById("input-amount").value = "";
//   document.getElementById("withdrawal-amount").value = "";

//   button.removeAttribute("disabled");

// });

// async function update() {
//   const currentAmount = await dapp.checkBalance();
//   document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
// };