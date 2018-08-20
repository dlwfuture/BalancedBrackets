const BalancedBrackets = require('./balancedBrackets')

module.exports = {
    Message: function(testNumber, actual, expected, expression, success){
        return `
        Test n.${testNumber} ${ success ? "successfull" : "failed" }
        Expected: ${JSON.stringify(expected)}
        Actual: ${JSON.stringify(actual)}
        Value: ${JSON.stringify(expression)}
        `
    },
    Validate: function(testNumber, actual, expected, expression) {
        const success = actual === expected
        success && console.info(this.Message(testNumber, actual, expected, expression, success))
        !success && console.error(this.Message(testNumber, actual, expected, expression, success))
        return success
    },

    Test: function(){
        let testVal = "(){}[]"
        this.Validate(1, BalancedBrackets.Validate(testVal), true, testVal)
        testVal = "[{()}](){}"
        this.Validate(2, BalancedBrackets.Validate(testVal), true, testVal)
        testVal = "[]{()"
        this.Validate(3, BalancedBrackets.Validate(testVal), false, testVal)
        testVal = "[{)]"
        this.Validate(4, BalancedBrackets.Validate(testVal), false, testVal)
    }
}