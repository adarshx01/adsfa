'use client'
import React, { useState } from 'react';

function Page() {
  const [matrixA, setMatrixA] = useState('');
  const [matrixB, setMatrixB] = useState('');
  const [inverseMatrix, setInverseMatrix] = useState('');
  const [result, setResult] = useState('');

  const multiplyMatrices = () => {
    try {
      const matA = parseMatrix(matrixA);
      const matB = parseMatrix(matrixB);
      
      if (matA[0].length !== matB.length) {
        throw new Error('Invalid matrices for multiplication');
      }
      
      const resultMatrix = [];
      for (let i = 0; i < matA.length; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < matB[0].length; j++) {
          let sum = 0;
          for (let k = 0; k < matB.length; k++) {
            sum += matA[i][k] * matB[k][j];
          }
          resultMatrix[i][j] = sum;
        }
      }
      
      setResult(formatMatrix(resultMatrix));
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  const calculateInverse = () => {
    try {
      const mat = parseMatrix(inverseMatrix);
      
      if (mat.length !== mat[0].length) {
        throw new Error('Matrix is not square');
      }
      
      const det = determinant(mat);
      if (det === 0) {
        throw new Error('Matrix is singular, cannot invert');
      }
      
      const adjMatrix = adjugate(mat);
      const invMatrix = multiplyScalar(adjMatrix, 1 / det);
      
      setResult(formatMatrix(invMatrix));
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  const parseMatrix = (matrixString) => {
    return matrixString
      .trim()
      .split('\n')
      .map((row) => row.trim().split(/\s+/).map((value) => parseFloat(value)));
  };

  const formatMatrix = (matrix) => {
    return matrix.map(row => row.join('\t')).join('\n');
  };

  const determinant = (matrix) => {
    if (matrix.length === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    let det = 0;
    for (let i = 0; i < matrix.length; i++) {
      det += matrix[0][i] * cofactor(matrix, 0, i);
    }
    return det;
  };

  const cofactor = (matrix, row, col) => {
    const minor = minorMatrix(matrix, row, col);
    const sign = (row + col) % 2 === 0 ? 1 : -1;
    return sign * determinant(minor);
  };

  const minorMatrix = (matrix, row, col) => {
    return matrix.filter((_, r) => r !== row).map(row => row.filter((_, c) => c !== col));
  };

  const adjugate = (matrix) => {
    const adjMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      adjMatrix[i] = [];
      for (let j = 0; j < matrix.length; j++) {
        adjMatrix[i][j] = cofactor(matrix, i, j);
      }
    }
    return transpose(adjMatrix);
  };

  const transpose = (matrix) => {
    return matrix[0].map((_, col) => matrix.map(row => row[col]));
  };

  const multiplyScalar = (matrix, scalar) => {
    return matrix.map(row => row.map(val => val * scalar));
  };

  return (
    <div>
      <h2>Matrix Calculator</h2>
      <div>
        <textarea
          placeholder="Enter matrix A (separate values by space or newline)"
          value={matrixA}
          onChange={(e) => setMatrixA(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Enter matrix B (separate values by space or newline)"
          value={matrixB}
          onChange={(e) => setMatrixB(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Enter matrix for Inverse (separate values by space or newline)"
          value={inverseMatrix}
          onChange={(e) => setInverseMatrix(e.target.value)}
        />
      </div>
      <button onClick={multiplyMatrices}>Calculate Matrix Multiplication</button>
      <button onClick={calculateInverse}>Calculate Inverse</button>
      <div>
        <h3>Result:</h3>
        <textarea value={result} readOnly />
      </div>
    </div>
  );
}

export default Page;
