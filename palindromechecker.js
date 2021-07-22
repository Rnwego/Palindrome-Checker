function palindrome(str) {
    var str = str.toLowerCase().replace(/[\W_]/g, "")
    var reverse = str.split("").reverse().join("")
    if (reverse === str) return true;
    return false;
}