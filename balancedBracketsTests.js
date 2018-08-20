const BalancedBrackets = require('./balancedBrackets')

module.exports = {
    Validate: function(testNumber, actual, expected, expression) {
        const passed = actual === expected
        passed && console.info(`
        Test n.${testNumber} passed
        Expected: ${JSON.stringify(expected)}
        Actual: ${JSON.stringify(actual)}
        Value: ${JSON.stringify(expression)}
        `)
        !passed && console.error(`
        Test n.${testNumber} failed
        Expected: ${JSON.stringify(expected)}
        Actual: ${JSON.stringify(actual)}
        Value: ${JSON.stringify(expression)}
        `)
        return passed
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