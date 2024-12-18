
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

        // Pregunta 2
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
            document.getElementById('result2').innerText = primes.join(', ');
        }

        function isPrime(num) {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }

        // Calculadora 
        let calcExpression = "";

        function press(key) {
            calcExpression += key;
            document.getElementById('calcDisplay').value = calcExpression;
        }

        function clearCalc() {
            calcExpression = "";
            document.getElementById('calcDisplay').value = "";
        }

        function calculate() {
            try {
                calcExpression = eval(calcExpression).toString();
                document.getElementById('calcDisplay').value = calcExpression;
            } catch (e) {
                document.getElementById('calcDisplay').value = "Error";
            }
        }

        // Pregunta 4
        function checkPalindrome() {
            let str = document.getElementById('cadena').value;
            let reversed = str.split('').reverse().join('');
            document.getElementById('result4').innerText = str === reversed ? "Es palíndromo" : "No es palíndromo";
        }
    

    // Pregunta 5
    function rotateEvenDigits() {
        let num = document.getElementById('numero').value;
        let evens = num.split('').filter(d => parseInt(d) % 2 === 0);
        evens.unshift(evens.pop());
        let result = num.split('').map(d => (parseInt(d) % 2 === 0 ? evens.shift() : d)).join('');
        document.getElementById('result5').innerText = result;
    }
////////////////////////////////////////////////

    function calculateFactorials() {
        let n = parseInt(document.getElementById('factorialN').value);
        let result = [];
        for (let i = 1; i <= n; i++) {
            result.push(`${i}! = ${factorial(i)}`);
        }
        document.getElementById('resultOpt').innerText = result.join(', ');
    }


