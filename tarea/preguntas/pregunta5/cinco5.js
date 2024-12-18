function rotateEvenDigits() {
    let num = document.getElementById('numero').value;
    let evens = num.split('').filter(d => parseInt(d) % 2 === 0);
    evens.unshift(evens.pop());
    let result = num.split('').map(d => (parseInt(d) % 2 === 0 ? evens.shift() : d)).join('');
    document.getElementById('result5').innerText = result;
}