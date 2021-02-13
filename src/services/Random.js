
export function getRandomArray(length) {
    var arr = [];
    while(arr.length < length){
        var r = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

export function getRandomBoolanArray(length, difficutly_level) {
    var arr = [];
    for(var i=0; i < length; i++) {
        arr.push(Math.random() > difficutly_level)
    }
    return arr
}


export function sequanceArray(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

export function suffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export function getRandomSequanceArray(level) {
    return suffleArray(sequanceArray(1, level))
}



