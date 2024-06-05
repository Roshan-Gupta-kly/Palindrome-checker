const checkBtn = document.getElementById("check-btn")
const palindromeInput = document.getElementById("text-input")
const result = document.getElementById("result");
const userInput = document.getElementById("user-input")
const strongTag = document.getElementsByTagName("strong")[0]
const not = document.querySelector(".not");
const yes = document.querySelector(".yes");

// checkBtn.addEventListener("click", () =>{
//     const inputValue = palindromeInput.value.trim();
//     const reverseInputValue = inputValue.split('').reverse().join('');
//     if(inputValue === ''){
//         alert("Please input a value")
//     }else if(inputValue == reverseInputValue){
//         result.style.display = "block";
//         strongTag.innerHTML = reverseInputValue;
//     }else{
//         not.style.display = "inline"; 
//         strongTag.innerHTML = inputValue;
//     }
// })




checkBtn.addEventListener("click", () => {
    const inputValue = palindromeInput.value.trim();

    if (inputValue === '') {
        alert("Please input a value");
    } else {
        const isPalindrome = checkPalindrome(inputValue);
        if (isPalindrome) {
            result.style.display = "block";
            yes.style.display = "inline"
            not.style.display = "none"
            strongTag.innerHTML = inputValue;
        } else {
            result.style.display = "block";
            yes.style.display = "none"
            not.style.display = "inline"
            strongTag.innerHTML = inputValue;
        }
    }
});

function checkPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Compare the cleaned string with the reversed string
    return cleanedStr === reversedStr;
}