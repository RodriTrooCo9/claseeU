function calculateFactorials() {
    let n = parseInt(document.getElementById('factorialN').value);
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(`${i}! = ${factorial(i)}`);
    }
    document.getElementById('resultOpt').innerText = result.join(', ');
}