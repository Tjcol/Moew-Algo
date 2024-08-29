function isPalindrome(str) {
    // Helper function to clean the string
    function cleanString(s) {
        return s.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    const cleanedStr = cleanString(str);

    function checkPalindrome(s, start, end) {
        if (start >= end) {
            return true;
        }
        if (s[start] !== s[end]) {
            return false;
        }
        return checkPalindrome(s, start + 1, end - 1);
    }

    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, World!")); // false
