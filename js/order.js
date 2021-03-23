const orderInput = document.querySelector(".order-field");
const orderInputNumber = document.getElementById("quantity");
const orderSelect1 = document.querySelector(".order-select-one");
const orderSelect2 = document.querySelector(".order-select-two");
const orderButton = document.querySelector(".order-button");

orderButton.addEventListener("click", function (event) {
  if (
    orderSelect1.value === "" ||
    orderSelect2.value === "" ||
    orderInput.value.length === 0 ||
    orderInputNumber.value === "0" ||
    orderInputNumber.value === ""
  ) {
    alert("Please fill out all the fields!");
  } else {
    alert("Thank you! Your order has been processed.");
  }
  event.preventDefault();
});
