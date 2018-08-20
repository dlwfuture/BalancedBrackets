module.exports = {
    AllowOnlySpecificChars: function(str, chars) {
        return str && str.length ? str.split('')
            .filter(s => chars.indexOf(s) > -1)
            .join('') : str
    },

    Validate: function(str){
        const openBrackets = ['[','{','(']
        const closeBrackets = [']','}',')']
        const allBrackets = [...openBrackets,...closeBrackets]
        const onlyBracketsStr = this.AllowOnlySpecificChars(str, allBrackets)
        let notBalancedBrackets = []
    
        if (!onlyBracketsStr || !onlyBracketsStr.length) {
            return true
        }
    
        if (onlyBracketsStr.length % 2 !== 0){
            return false
        }
    
        for (const ch of onlyBracketsStr) {
            if (closeBrackets.indexOf(ch) === -1){
                notBalancedBrackets.push(ch)
            }
            else{
                const match = openBrackets[closeBrackets.indexOf(ch)]
                if (notBalancedBrackets.length === 0 || (notBalancedBrackets.pop() !== match)) {
                    return false
                }
            }
        }
        
        return notBalancedBrackets.length == 0
    }   
}