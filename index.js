function map(sourceArray, fn) {
    let newArray = [];
    sourceArray.forEach(element => {
        newArray.push(fn(element));
    })
    return newArray;
}

function reduce(sourceArray, callback, startingPoint) {
    let total;
    
    if (startingPoint) {
        total = startingPoint;
        for (let i = 0; i < sourceArray.length; i++) {
        total = callback(sourceArray[i], total);
        }
        return total;
    } 
    else {
        total = sourceArray[0];
        for (let i = 1; i < sourceArray.length; i++) {
        total = callback(sourceArray[i], total);
        }
        return total;
    }
}