/*
    matrix.js will hold all Matrix related operations encapuslated in a Matrix class.
*/

class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
    }
    
    // Debug purposes only to display the matrix in console.
    displayMatrix() {
        this.data.forEach(row => console.log(row));
    }
    
    // NOTE: Embed the following methods in the Matrix class by making it static.
    // TODO: add(A,B) 
    // TODO: subtract(A,B)
    // TODO: multiply(A,B)
    // TODO: transpose(A)
}

export default Matrix;