function checkPalindrome() {
    let str = document.getElementById('cadena').value;
    let reversed = str.split('').reverse().join('');
    document.getElementById('result4').innerText = str === reversed ? "Es palíndromo" : "No es palíndromo";
}