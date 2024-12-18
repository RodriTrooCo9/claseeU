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