/*
    Matrix class is imported from matrix.js.
    script.js will hold all Matrix related operations encapuslated in a class Matrix.
*/
import Matrix from './matrix.js';

const cellAttributes = {
    type: 'text',
    class: 'matrix-cell',
};

const matrixADimensions = document.querySelector('#matrix-a');
const matrixBDimensions = document.querySelector('#matrix-b');
const generateBtn = document.querySelector('.btn-gen');
const matrixATbl = document.querySelector('#container-mat-a');
const matrixBTbl = document.querySelector('#container-mat-b');
// Host variables for matrices A and B, and a flag to check for generated matrices
let matrixA, matrixB, hasGeneratedMatrices = false;

// Disable button and change button style
const setDisabled = (button) => {
    button.disabled = true;
    button.style.backgroundColor = 'lightgrey'; 
    button.style.cursor = 'not-allowed';
}

// Disable button and change button style
const setEnabled = (button) => {
    button.disabled = false;
    button.style.backgroundColor = '#BF0C34'; 
    button.style.cursor = 'default';
}

// Collapse borders for the table
const collapseBorders = (table) => {
    table.style.borderCollapse = 'collapse';
    table.style.borderSpacing = 0;
}

// Validate the input format for matrix dimensions in the format "m,n", where m,n should be non-negative integers.
const validateFormat = (valueInput) => {
    const regex = /^[1-9]\d*,[1-9]\d*$/;
    return regex.test(valueInput);
}

const resetMatrix = (matrix) => {
    while (matrix.rows.length > 0) { matrix.deleteRow(0); }
    hasGeneratedMatrices = false;
    setEnabled(generateBtn);
    matrix.style.borderCollapse = 'separate';
    matrix.style.border = '1px solid var(--red)';
    matrix.style.borderRadius = '10px';
}

const resetDimensionField = (input) => input.value = '';

generateBtn.addEventListener('click', () => {
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
        resetDimensionField(matrixADimensions);
        resetDimensionField(matrixBDimensions);
        return;
    }

    // Extract row, col values for matrices A and B
    const [ai, aj] = matrixADim.split(',').map(Number);
    const [bi, bj] = matrixBDim.split(',').map(Number);

    // Instantiate Matrix A and Matrix B
    matrixA = new Matrix(ai, aj);
    matrixB = new Matrix(bi, bj);

    // Generate Matrices A and B
    generateMatrixFields(ai, aj, matrixATbl);
    generateMatrixFields(bi, bj, matrixBTbl);

    // Matrices has already been generated; disable the button
    hasGeneratedMatrices = true;
    if (hasGeneratedMatrices) {
        setDisabled(generateBtn);
        collapseBorders(matrixATbl);
        collapseBorders(matrixBTbl);
    }
});

// Generate matrix fields based on the dimensions provided
const generateMatrixFields = (rows, cols, matrix) => {
    matrix.innerHTML = '';
    for(let i = 0; i < rows; i++) {
        let matrixRow = matrix.insertRow();
        for(let j = 0; j < cols; j++) {
            let matrixCell = matrixRow.insertCell(),
                cellInput = document.createElement("input");
            Object.keys(cellAttributes).forEach(attribute => {
                cellInput.setAttribute(attribute, cellAttributes[attribute]);
            });
            matrixCell.appendChild(cellInput);
        }
    }
}

document.getElementById('reset-a').addEventListener('click', () => {
    resetMatrix(matrixATbl);
    resetDimensionField(matrixADimensions);
});

document.getElementById('reset-b').addEventListener('click', () => {
    resetMatrix(matrixBTbl);
    resetDimensionField(matrixBDimensions);
});