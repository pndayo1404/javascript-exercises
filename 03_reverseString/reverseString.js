const reverseString = function(str) {
    let str1 = "";
    for (let i = str.length - 1; i >= 0; i--){
        str1 += str[i];
    }
    return str1;
};

// Do not edit below this line
module.exports = reverseString;
