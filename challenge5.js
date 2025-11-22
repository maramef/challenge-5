const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 149.50,
    CAD: 1.36,
    AUD: 1.52,
    CHF: 0.88,
    CNY: 7.24,
    INR: 83.12,
    DZD: 134.50
};
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value)
    const fromCurrency = document.getElementById('fromCurrency').value
    const toCurrency = document.getElementById('toCurrency').value
    const resultDiv = document.getElementById('result')

    if (!amount || amount <= 0){
        resultDiv.textContent = 'Please enter a valid amount'
        resultDiv.classList.add('show')
        return;
    }

    const amountInUSD = amount / exchangeRates[fromCurrency]
    const convertedAmount = amountInUSD * exchangeRates[toCurrency]

    resultDiv.textContent = `${amount} ${fromCurrency} =${convertedAmount.toFixed(2)} ${toCurrency}`
    resultDiv.classList.add('show');
}

function resetForm() {
    document.getElementById('amount').value=''
    document.getElementById('fromCurrency').value='DZD'
    document.getElementById('toCurrency').value='DZD'
    document.getElementById('result').classList.remove('show')
}

document.getElementById('amount').addEventListener('keypress', function(e) {
    if (e.key === 'Enter'){
        convertCurrency()
    }
})