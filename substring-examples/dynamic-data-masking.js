const creditCardNumber = "1234 5678 9012 3456";
const maskedNumber =
    creditCardNumber.substring(0, 12).replace(/\d/g, "*") +
    creditCardNumber.substring(12);

console.log(`Masked Number: ${maskedNumber}`);
