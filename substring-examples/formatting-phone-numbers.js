const phoneNumber = "1234567890";
const formattedNumber = `(${phoneNumber.substring(
    0,
    3
)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;

console.log(`Formatted Number: ${formattedNumber}`);
