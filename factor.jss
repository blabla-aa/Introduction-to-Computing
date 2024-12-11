document.getElementById('calculationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const n = parseInt(document.getElementById('number').value);
    if (n < 1) {
        alert('Please enter a number greater than or equal to 1.');
        return;
}

    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
 }

    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
}
    while (j <= n);
    let average = 0;
    for (let k = 1; k <= n; k++) {
        average += k;
}
    average /= n;

    document.getElementById('factorialResult').innerText = `Factorial of ${n} (using while loop): ${factorial}`;
    document.getElementById('sumResult').innerText = `Sum of first ${n} numbers (using do-while loop): ${sum}`;
    document.getElementById('averageResult').innerText = `Average of first ${n} numbers (using for loop): ${average.toFixed(2)}`;
    document.getElementById('results').style.display = 'block';
});
