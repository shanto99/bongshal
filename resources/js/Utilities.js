const shortString = function (inputString, count = 20){
    if(inputString.length <= count) return inputString;
    return inputString.slice(0, count)+'...';
}

export {shortString};
