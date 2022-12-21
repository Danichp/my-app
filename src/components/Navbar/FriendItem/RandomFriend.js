
function shuffle(arr) {
    let result = [];
    
    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length 
            - 1); 
        let elem = arr.splice(random, 1)[0];
        result.push(elem);
    }
    
    return result;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min 
        + 1)) + min; 
}

function first(arr, length) {
    return arr.splice(0, length)
}

function random(arr, length) {
    return first(shuffle(arr), length)
}


export default random