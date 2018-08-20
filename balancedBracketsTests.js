const BalancedBrackets = require('./balancedBrackets')

module.exports = {
    Validate: function(testNumber, actual, expected) {
        const passed = actual === expected
        passed && console.info(`Test n.${testNumber} passed`)
        !passed && console.error(`
        Test n.${testNumber} failed
        Expected: ${JSON.stringify(expected)}
        Actual: ${JSON.stringify(actual)}
        `)
        return passed
    },

    Test: function(){
        this.Validate(1, BalancedBrackets.Validate("(){}[]"), true)
        this.Validate(2, BalancedBrackets.Validate("[{()}](){}"), true)
        this.Validate(3, BalancedBrackets.Validate("[]{()"), false)
        this.Validate(4, BalancedBrackets.Validate("[{)]"), false)
    }
}