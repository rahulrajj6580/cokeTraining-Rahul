function validateNum(number){
    const num = Number(number);
    return !isNaN(number) && number >0

}

function validateString(inputString){
    return typeof inputString === 'string' && inputString.trim().length>0
}


module.exports ={
    validateNum,
    validateString
}