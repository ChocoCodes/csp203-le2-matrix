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
    displayMatrixConsole() {
        this.data.forEach(row => console.log(row));
    }

    // Check if both matrices are eligible for addition or subtraction.
    static isSameDimension(A, B) {
        return A.rows === B.rows && A.cols === B.cols;
    }

    // Check if both matrices are eligible for multiplication.
    static isSameRowCol(A, B) {
        return A.cols === B.rows;
    }
    
    // Perform addition and subtraction operations on matrices A and B.
    static addOrSubtract(A, B, shouldAdd) {
        if (!isSameDimension(A, B)) {
            alert("Matrices must have the same dimensions for this operation.");
            return;
        }
        const resultMatrix = new Matrix(A.rows, A.cols);
        for (let i = 0; i < resultMatrix.rows; i++) {
            for (let j = 0; j < resultMatrix.cols; j++) {
                resultMatrix.data[i][j] = shouldAdd 
                    ? A.data[i][j] + B.data[i][j] 
                    : A.data[i][j] - B.data[i][j];
            }
        }
        return resultMatrix;
    }
    // TODO: multiply(A,B)

    // Transpose of a Matrix A^T
    static transpose(A) {
        const resultMatrix = new Matrix(A.cols, A.rows);
        for (let i = 0; i < A.rows; i++) {
            for (let j = 0; j < A.cols; j++) {
                resultMatrix.data[j][i] = A.data[i][j];
            }
        }
        return resultMatrix;
    }
}

export default Matrix;