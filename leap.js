function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
    }
}

// Example usage
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
