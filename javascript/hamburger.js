//toggle active
const pagelinks = document.querySelector(".pagelinks");
// comsole.log("1");
//pas menunya di click
document.querySelector("#menu").onclick = () => {
  pagelinks.classList.toggle("active");
};

//buat validation contact us

function validateData() {
  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const countryInput = document.getElementById("country");
  const privacynoticeInput = document.getElementById("privacynotice");

  // Reset previous error messages
  document.getElementById("demo").textContent = "";
  document.getElementById("demo").style.color = "red";
  document.getElementById("demo").style.fontSize = "0.6rem";
  document.getElementById("demo").style.margin = "0.3rem 0";
  document.getElementById("demo1").textContent = "";
  document.getElementById("demo1").style.color = "red";
  document.getElementById("demo1").style.fontSize = "0.6rem";
  document.getElementById("demo1").style.margin = "0.3rem 0";
  document.getElementById("demo2").textContent = "";
  document.getElementById("demo2").style.color = "red";
  document.getElementById("demo2").style.fontSize = "0.6rem";
  document.getElementById("demo2").style.margin = "0.3rem 0";
  document.getElementById("demo3").textContent = "";
  document.getElementById("demo3").style.color = "red";
  document.getElementById("demo3").style.fontSize = "0.6rem";
  document.getElementById("demo3").style.margin = "0.3rem 0";
  document.getElementById("demo4").textContent = "";
  document.getElementById("demo4").style.color = "red";
  document.getElementById("demo4").style.fontSize = "0.6rem";
  document.getElementById("demo4").style.margin = "0.3rem 0";

  // Reset success message
  document.getElementById("success-message").textContent = "";

  let isValid = true;

  // Validate first name (First letter must be capital)
  if (!/^[A-Z][a-zA-Z]*$/.test(firstnameInput.value)) {
    document.getElementById("demo").textContent =
      "*First letter must be capital";
    isValid = false;
  }

  // Validate last name (First letter must be capital)
  if (!/^[A-Z][a-zA-Z]*$/.test(lastnameInput.value)) {
    document.getElementById("demo1").textContent =
      "*First letter must be capital";
    isValid = false;
  }

  // Validate email (Must be ended with gmail.com or yahoo.com)
  if (!/^[\w.-]+@(gmail\.com|yahoo\.com)$/.test(emailInput.value)) {
    document.getElementById("demo2").textContent =
      "*Email must be ended with gmail.com or yahoo.com";
    isValid = false;
  }

  // Validate country (First letter must be capital)
  if (!/^[A-Z][a-zA-Z]*$/.test(countryInput.value)) {
    document.getElementById("demo3").textContent =
      "*First letter must be capital";
    isValid = false;
  }

  // Validate privacy notice checkbox
  if (!privacynoticeInput.checked) {
    document.getElementById("demo4").textContent =
      "*You must check if you want to send messages";
    isValid = false;
  }

  // If all fields are valid, show success message

  if (isValid) {
    alert("Message sent successfully!");
    // Reset form
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("country").value = "";
    document.getElementById("messages").value = "";
    document.getElementById("privacynotice").checked = false;
    document.getElementById("copymessages").checked = false;
  }
}

// function validateData() {
//   var firstname = document.getElementById("firstname").value;
//   var lastname = document.getElementById("lastname").value;
//   var email = document.getElementById("email").value;
//   var country = document.getElementById("country").value;
//   var privacynotice = document.getElementById("privacynotice").value;

//   function firstcapital(name) {
//     var firstLetter = name.charAt(0);
//     if (firstLetter == firstLetter.toUpperCase()) {
//       return true; //kalo sama
//     }
//     return false;
//   }

//   if (firstcapital(firstname) == false) {
//     console.log("1");
//     alert("First letter are not in capital");
//   } else if (firstcapital(lastname) == false) {
//     alert("First letter are not in capital");
//   } else if (!email.endsWith("@gmail.com")) {
//     alert("Email does't end with gmail.com");
//   } else if (firstcapital(country) == false) {
//     alert("First letter are not in capital");
//   } else if (!privacynotice.checked) {
//     alert("Agreement must be checked");
//   } else {
//     alert("success");
//     //window.location.href ="success.html";
//   }
// }
// var errorfirstname = document.getElementById("errorfirstname").value;

// function firstcapital(name) {
//   var firstLetter = name.charAt(0);
//   if (firstLetter == firstLetter.toUpperCase()) {
//     return true; //kalo sama
//   }
//   return false;
// }

// let x;
// x.style = red;
// var count = 0;

// //firstname
// if (firstcapital(firstname) == false) {
//   console.log("1");
//   x = "*First letter must be capital";
// } else {
//   x = " ";
//   count += 1;
// }

// document.getElementById("demo").innerHTML = x;

// //lastname
// if (firstcapital(lastname) == false) {
//   console.log("2");
//   x = "*First letter must be capital";
// } else {
//   console.log("2");
//   x = " ";
//   count += 1;
// }
// document.getElementById("demo1").innerHTML = x;

// //email
// if (!email.endsWith("@gmail.com")) {
//   console.log("3");
//   x = "*Must be ended with gmail.com";
// } else {
//   x = " ";
//   count += 1;
// }
// document.getElementById("demo2").innerHTML = x;

// //country
// if (firstcapital(country) == false) {
//   console.log("4");
//   x = "*First letter must be capital";
// } else {
//   x = " ";
//   count += 1;
// }
// document.getElementById("demo3").innerHTML = x;

// //privacy notice
// if (!privacynotice.checked) {
//   console.log("5");
//   x = "*You must checked if want to send messages";
// } else {
//   x = " ";
//   count += 1;
// }
// document.getElementById("demo4").innerHTML = x;

// if (count == 5) {
//   alert("succsess");
// }
// else {
//   alert("success");
//   //window.location.href ="success.html";
// }

//filter product
