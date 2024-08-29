function getTicketPrice(age) {
    if (age <= 12) {
        return "$10"; // Price for children
    } else if (age >= 13 && age <= 17) {
        return "$15"; // Price for teenagers
    } else if (age >= 18) {
        return "$20"; // Price for adults
    } else {
        return "Invalid age"; // For ages below 0
    }
}

// Example usage
console.log(getTicketPrice(10)); // $10
console.log(getTicketPrice(15)); // $15
console.log(getTicketPrice(25)); // $20
