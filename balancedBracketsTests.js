class BalancedBracketsTests{
    static Validate(testNumber, actual, expected) {
        const passed = actual === expected
        passed && console.info(`Test n.${testNumber} passed`)
        !passed && console.error(`
        Test n.${testNumber} failed
        Expected: ${JSON.stringify(expected)}
        Actual: ${JSON.stringify(actual)}
        `)
        return passed
    }

    static Test(){
        this.Validate(1, BalancedBrackets.Validate("(){}[]"), true)
        this.Validate(2, BalancedBrackets.Validate("[{()}](){}"), true)
        this.Validate(3, BalancedBrackets.Validate("[]{()"), false)
        this.Validate(4, BalancedBrackets.Validate("[{)]"), false)
    }
}