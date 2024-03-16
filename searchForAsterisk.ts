

export function searchForAsterisk(jsonString? : string) {
    let result : boolean = true
    let resource : string | undefined = ''

    if(!jsonString) return result

    let parsedJson : any = JSON.parse(jsonString)

    let singleAsteriskRegex : RegExp = new RegExp('^[*]{1}$')

    let policyStatement : Array<Statement> | Statement | undefined = parsedJson?.PolicyDocument?.Statement

    if(policyStatement) {
        if(Array.isArray(policyStatement)){
            if(policyStatement.length === 0) return result
            else resource = policyStatement[0]?.Resource
        } else if(typeof policyStatement === 'object') resource = policyStatement?.Resource

        if(!resource) return result
    
        let matchResult = resource.match(singleAsteriskRegex)
    
        if(!matchResult) return result
        else return !result
    } 
    else return result
}