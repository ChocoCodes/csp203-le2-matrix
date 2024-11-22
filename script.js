import Matrix from './matrix.js';
/*
    Matrix class is imported above from matrix.js.
    script.js will hold all Matrix related operations encapuslated in a class Matrix.
*/

// Test Matrices for console only
const testMatrixA = {
    rows: 2,
    cols: 2,
    data: [
        [1, 2],
        [3, 4]
    ]
};
const testMatrixB = {
    rows: 2,
    cols: 2,
    data: [
        [2, 5],
        [8, 1]
    ]
};

window.generateTest = () => {
    const C = Matrix.multiply(testMatrixA, testMatrixB);
    Matrix.displayMatrixConsole(C);
    return;
}

const matrixADimensions = document.querySelector('#matrix-a');
const matrixBDimensions = document.querySelector('#matrix-b');
const btnGenMatrix = document.querySelector('.btn-gen');

// Host variables for matrices A and B
let matrixA, matrixB;

btnGenMatrix.addEventListener('click', () => {
    // Extract Values from Input fields
    const matrixADim = matrixADimensions.value;
    const matrixBDim = matrixBDimensions.value;
    // Validate Inputs
    if (matrixADim === '' || matrixBDim === '') {
        alert('Input fields for matrices A,B are required.');
        return;
    }
    if (!validateFormat(matrixADim) || !validateFormat(matrixBDim)) {
        alert('Please enter the dimensions for both matrices in the format "m,n",\nwhere m,n are non-negative integers.');
        matrixADimensions.value = '';
        matrixBDimensions.value = '';
        return;
    }
    // Extract row, col values for matrices A and B
    const [ai, aj] = matrixADim.split(',').map(Number);
    const [bi, bj] = matrixBDim.split(',').map(Number);
    // Instantiate Matrix A and Matrix B
    matrixA = new Matrix(ai, aj);
    matrixB = new Matrix(bi, bj);
    // Generate Matrices A and B
    generateMatrixFields(ai, aj, document.querySelector('#container-mat-a'));
    generateMatrixFields(ai, aj, document.querySelector('#container-mat-b'));
    alert(`Matrix A: ${matrixADimensions.value}\nMatrix B: ${matrixBDimensions.value}`);
});

// Validate the input format for matrix dimensions in the format "m,n"; m,n should be non-negative integers.
const validateFormat = (valueInput) => {
    const regex = /^[1-9]\d*,[1-9]\d*$/;
    return regex.test(valueInput);
}

const generateMatrixFields = (row, col, matrix) => {
    for(let i = 0; i < row; i++) {
        let matrixRow = document.createElement('tr');
        for(let j = 0; j < col; j++) {
            let matrixCell = document.createElement('td'),
                matrixInput = document.createElement('input');
            matrixCell.appendChild(matrixInput);
            matrixRow.appendChild(matrixCell);
        }
        matrix.appendChild(matrixRow);
    }
}
