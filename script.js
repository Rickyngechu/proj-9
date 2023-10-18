"use strict";
const price1 = document.querySelector(".amt-txt-1");
const price2 = document.querySelector(".amt-txt-2");
const price3 = document.querySelector(".amt-txt-3");

const annualTxt = document.querySelector(".annual");
const monthTxt = document.querySelector(".month");
const toggleBtn = document.querySelector(".check-toggle");

//Basically here we are checking whether the checkbox has been checked inorder to toggle between the price values.
toggleBtn.addEventListener("click", function (e) {
  if (e.target.checked) {
    annualTxt.classList.add("active");
    monthTxt.classList.remove("active");
    price1.textContent = "119.99";
    price2.textContent = "249.99";
    price3.textContent = "399.99";
  } else {
    annualTxt.classList.remove("active");
    monthTxt.classList.add("active");
    price1.textContent = "19.99";
    price2.textContent = "24.99";
    price3.textContent = "39.99";
  }
});
