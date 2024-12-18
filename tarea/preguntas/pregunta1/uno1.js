function calculateSeries() {
    let n = parseInt(document.getElementById('n').value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += factorial(2 * i - 2);
    }
    document.getElementById('result1').innerText = sum;
}

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}