/*
    matrix.js will hold all Matrix related operations encapuslated in a Matrix class.
*/

class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 2));
    }
    
    // Debug purposes only to display the matrix in console.
    displayMatrix() {
        this.data.forEach(row => console.log(row));
    }
    
    // NOTE: Embed the following methods in the Matrix class by making it static.
    static add(A, B) {

        if (A.rows !== B.rows || A.cols !== B.cols) {
            alert("Matrices must have the same dimensions for addition.");
            return;
        }

        const sumMatrix = new Matrix(A.rows, A.cols);
        for (let i = 0; i < sumMatrix.rows; i++) {
            for (let j = 0; j < sumMatrix.cols; j++) {
                sumMatrix.data[i][j] = A.data[i][j] + B.data[i][j];
            }
        }
        return sumMatrix;
    }
    // TODO: subtract(A,B)
    // TODO: multiply(A,B)
    // TODO: transpose(A)
}

export default Matrix;