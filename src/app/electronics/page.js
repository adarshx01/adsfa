'use client'
import React, { useState } from 'react';

const page = () => {
  const [numBands, setNumBands] = useState(4);
  const [colors, setColors] = useState(['', '', '', '']);
  const [result, setResult] = useState('');

  const colorValues = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9
  };

  const toleranceValues = {
    '±1%': 0.01,
    '±2%': 0.02,
    '±5%': 0.05,
    '±10%': 0.1
  };

  const calculateResistance = () => {
    let value = '';
    let tolerance = '';

    if (numBands === 4 && colors[3] in toleranceValues) {
      value = (colorValues[colors[0]] * 10 + colorValues[colors[1]]) * Math.pow(10, colorValues[colors[2]]);
      tolerance = toleranceValues[colors[3]] * 100;
    } else if (numBands === 3) {
      value = (colorValues[colors[0]] * 10 + colorValues[colors[1]]) * Math.pow(10, colorValues[colors[2]]);
    }

    setResult(`Resistance: ${value} ohms${tolerance ? ` ±${tolerance}%` : ''}`);
  };

  const handleColorChange = (index, value) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Resistor Color Code Calculator</h2>
      <div className="mb-4">
        <label className="mr-2">Number of Bands:</label>
        <select value={numBands} onChange={(e) => setNumBands(parseInt(e.target.value))}>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
      <div className="flex items-center mb-4">
        {colors.slice(0, numBands).map((color, index) => (
          <div key={index} className="w-10 h-10 rounded-full border border-gray-300 mr-2" style={{ backgroundColor: color }}></div>
        ))}
      </div>
      <div className="flex mb-4">
        {colors.slice(0, numBands).map((color, index) => (
          <select key={index} className="mr-2 p-2 border border-gray-300" value={color} onChange={(e) => handleColorChange(index, e.target.value)}>
            <option value="">Select</option>
            {Object.keys(colorValues).map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        ))}
        {numBands === 4 && (
          <select className="p-2 border border-gray-300" value={colors[3]} onChange={(e) => handleColorChange(3, e.target.value)}>
            <option value="">Tolerance</option>
            {Object.keys(toleranceValues).map(tol => (
              <option key={tol} value={tol}>{tol}</option>
            ))}
          </select>
        )}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={calculateResistance}>Calculate</button>
      {result && <p className="mt-4">{result}</p>}
    </div>
  );
};

export default page;
