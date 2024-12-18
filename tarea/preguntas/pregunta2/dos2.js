function generatePrimes() {
    let n = parseInt(document.getElementById('nPrimo').value);
    let primes = [];
    let count = 0, num = 2;
    while (count < n) {
        if (isPrime(num)) {
            primes.push(num);
            count++;
        }
        num++;
    }
    document.getElementById('result2').innerText = primes.join('primo, ');
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}