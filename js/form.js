$(document).ready(function() {
    $('#js-convert-gbp').submit(function(event) {
        event.preventDefault()

        var target = event.target

        var amount = target.amount.value
        var currency = target.currency.value

        var convertedAmount = currencyConverter.convertTo(currency, amount)

        document.write('<h3>' + amount + ' GBP in ' + currency + ' is ' + convertedAmount + '</h3>')

    })
})