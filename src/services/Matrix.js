export function createMatrix(array, matrixNumber) {
    return array.reduce(function (rows, key, index) { 
        return (index % matrixNumber == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);
}
export function createBooleanMatrix(array, matrixNumber) {
    return array.reduce(function (rows, key, index) { 
        return (index % matrixNumber == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);
}
export function getColumn(matrix, index) {
    var column = [];
    for(var i=0; i<matrix.length; i++){
        column.push(matrix[index][i]);
    }
    return column;
}

export function getColumnSum(matrix, index) {
    return getColumn(matrix, index).reduce((a, b) => a + b, 0)
}

export function getRow(matrix, index) {
    var row = [];
    for(var i=0; i<matrix.length; i++){
        row.push(matrix[i][index]);
    }
    return row;
}
export function getRowSum(matrix, index) {
    return getRow(matrix, index).reduce((a,b) => a+b, 0);
}

export function getDiagonal(matrix) {
    var diagonal = [];
    for(var i=0; i<matrix.length; i++){
        diagonal.push(matrix[i][i]);
    }
    return diagonal;
}

export function getDiagonalSum(matrix) {
    return getDiagonal(matrix).reduce((a,b) => a+b, 0);
}

export function getAllRowSum(matrix) {
    var rowSum = []
    for(var i=0; i< matrix.length; i++) {
        rowSum.push(getRowSum(matrix, i))
    }
    return rowSum
}

export function getAllColumnSum(matrix) {
    var colSum = []
    for(var i=0; i< matrix.length; i++) {
        colSum.push(getColumnSum(matrix, i))
    }
    return colSum
}