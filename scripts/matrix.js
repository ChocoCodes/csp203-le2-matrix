/*
    matrix.js will hold all Matrix related operations encapuslated in a Matrix class.
*/

class Matrix {
    #rows;
    #cols;
    #data;

    constructor(rows, cols) {
        this.#rows = rows;
        this.#cols = cols;
        this.#data = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
    }
    
    // External Communication through Encapsulation
    getRows() { return this.#rows; }
    setRows(rows) { this.#rows = rows; }
    getCols() { return this.#cols; }
    setCols(cols) { this.#cols = cols; } 
    getData() { return this.#data; }
    setData(data) { this.#data = data; } 
    // Debug purposes to display the matrix in console.
    static displayMatrixConsole(matrix) { matrix.#data.forEach(row => console.log(row)); }
    // Check if both matrices are eligible for addition or subtraction.
    static isSameDimension(A, B) { return A.#rows === B.#rows && A.#cols === B.#cols; }
    // Check if both matrices are eligible for multiplication.
    static isSameRowCol(A, B) { return A.#cols === B.#rows; }
    
    // Perform addition and subtraction operations on matrices A and B.
    static addOrSubtract(A, B, shouldAdd) {
        if (!Matrix.isSameDimension(A, B)) {
            alert("Matrices must have the same dimensions for this operation.");
            return;
        }
        const resultMatrix = new Matrix(A.#rows, A.#cols);
        for (let i = 0; i < resultMatrix.#rows; i++) {
            for (let j = 0; j < resultMatrix.#cols; j++) {
                resultMatrix.#data[i][j] = shouldAdd 
                    ? A.#data[i][j] + B.#data[i][j] 
                    : A.#data[i][j] - B.#data[i][j];
            }
        }
        return resultMatrix;
    }

    // Perform standard matrix multiplication - O(n^3) time complexity
    static multiply(A, B) {
        const m = A.#rows;
        const n = A.#cols;     
        const p = B.#cols;       

        const C = new Matrix(A.#rows, B.#cols);

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < p; j++) {
                C.#data[i][j] = 0;
                for (let k = 0; k < n; k++) {
                    C.#data[i][j] += A.#data[i][k] * B.#data[k][j];
                }
            }
        }
        return C;
    }
    
    // Transpose of a Matrix A^T
    static transpose(A) {
        const resultMatrix = new Matrix(A.#cols, A.#rows);
        for (let i = 0; i < A.#rows; i++) {
            for (let j = 0; j < A.#cols; j++) {
                resultMatrix.#data[j][i] = A.#data[i][j];
            }
        }
        return resultMatrix;
    }
}

export default Matrix;