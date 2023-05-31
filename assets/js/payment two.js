


function emptyFieldFillOut(event){

    event.preventDefault();
  
  const cardNumber = document.getElementById("cardNumber");
  const cardHolders = document.getElementById("cardName");
  const cardMonth = document.getElementById("cardMonth");
  const cardYear = document.getElementById("cardYear");
  const cardCvv = document.getElementById("cardCvv");
  
 
  
  if (cardNumber.value === "" || cardHolders.value === "" || cardMonth.value === "" || cardYear.value === "" || cardCvv.value === "") {
    alert("Please fill out the empty fields below");
  } else {
    alert("Your payment process has been completed. The product will be delivered. To track the product, please click the link sent to your email address");
  }
  
}
  
  document.getElementById("submit-the-money").addEventListener("click", emptyFieldFillOut)