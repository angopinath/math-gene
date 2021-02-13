import * as matrix from './Matrix'
import * as random from './Random'

export function initGame(level) {
    const ground = level
    const dimension =  ground * ground
    const diffLevel = 0.5

    const randomArr = random.getRandomSequanceArray(dimension)
    const randomBolArr = random.getRandomBoolanArray(dimension, diffLevel)
    const dbolArr = matrix.createBooleanMatrix(randomBolArr, ground)
    
    const darray = matrix.createMatrix(randomArr, ground)
    const rowSums = matrix.getAllRowSum(darray)
    console.log("rowSums:"+ rowSums)
    const colSums = matrix.getAllColumnSum(darray)
    console.log("colSums:"+ colSums)
    const diagonalSum = matrix.getDiagonalSum(darray)
    console.log("diagonalSum:"+ diagonalSum)

    var data = []

    rowSums.splice(0, 0, diagonalSum)
    const topClues = createClues(rowSums)
    const sideClues = createClues(colSums)

    const dataObjects = createDataObjects(darray, dbolArr)
    dataObjects.forEach((row, index) => {
        return row.splice(0, 0, sideClues[index])
    });
    
    dataObjects.unshift(topClues)
    return [randomArr.sort(), dataObjects]
}

function createClues(arr) {
    return arr.map((i,index) => 
        { 
        return {id: 'i'+index, isClue: true, isHidden: false, value: i } 
    })
}

function createDataObjects(darray, dbolArr) {
    return darray.map((row, rindex) => {
        return row.map((col, cindex) => {
            return {id: 'r'+rindex+cindex ,isClue: false, isHidden: dbolArr[rindex][cindex], value: col }
        })
    })
}