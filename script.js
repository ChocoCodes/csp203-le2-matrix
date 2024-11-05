import Matrix from './matrix.js';
/*
    Matrix class is imported above from matrix.js.
    script.js will hold all Matrix related operations encapuslated in a class Matrix.
*/

const matrixADimensions = document.querySelector('.mxn-a');
const matrixBDimensions = document.querySelector('.mxn-b');
const btnGenMatrix = document.querySelector('.gen-matrix');

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

    //for checking
    /*
    const sumMatrix = Matrix.add(matrixA, matrixB);
    sumMatrix.displayMatrix();
     */
    alert(`Matrix A: ${matrixADimensions.value}\nMatrix B: ${matrixBDimensions.value}`);
});

// Validate the input format for matrix dimensions in the format "m,n"; m,n should be non-negative integers.
const validateFormat = (valueInput) => {
    const regex = /^[1-9]\d*,[1-9]\d*$/;
    return regex.test(valueInput);
}