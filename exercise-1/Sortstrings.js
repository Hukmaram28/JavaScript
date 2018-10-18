var stringtext=prompt("Enter the string", "string");
sortstring(stringtext);
function sortstring(text) {
    console.log(text.split('').sort().join(''));
};