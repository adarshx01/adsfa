'use client'
import React, { useState } from 'react';

const page = () => {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [decimalNumber, setDecimalNumber] = useState('');
  const [hexadecimalNumber, setHexadecimalNumber] = useState('');
  const [octalNumber, setOctalNumber] = useState('');
  const [onesComplement, setOnesComplement] = useState('');
  const [twosComplement, setTwosComplement] = useState('');

  const handleBinaryChange = (event) => {
    const input = event.target.value;
    if (validateBinary(input)) {
      setBinaryNumber(input);
      calculateAll(input);
    }
  };

  const calculateAll = (binary) => {
    const decimal = parseInt(binary, 2);
    const hex = decimal.toString(16).toUpperCase();
    const octal = decimal.toString(8);
    const onesComp = calculateOnesComplement(binary);
    const twosComp = calculateTwosComplement(binary);
    setDecimalNumber(decimal);
    setHexadecimalNumber(hex);
    setOctalNumber(octal);
    setOnesComplement(onesComp);
    setTwosComplement(twosComp);
  };

  const calculateOnesComplement = (binary) => {
    return binary.split('').map((bit) => (bit === '0' ? '1' : '0')).join('');
  };

  const calculateTwosComplement = (binary) => {
    const onesComplement = calculateOnesComplement(binary);
    const twosComplement = addBinary(onesComplement, '1');
    return twosComplement;
  };

  const addBinary = (a, b) => {
    let carry = 0;
    let sum = '';
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0) {
      const bitA = i >= 0 ? parseInt(a[i]) : 0;
      const bitB = j >= 0 ? parseInt(b[j]) : 0;
      const total = bitA + bitB + carry;
      sum = (total % 2) + sum;
      carry = Math.floor(total / 2);
      i--;
      j--;
    }
    if (carry) {
      sum = '1' + sum;
    }
    return sum;
  };

  const validateBinary = (binary) => {
    const binaryRegex = /^[01]+$/;
    return binaryRegex.test(binary);
  };

  const handleDecimalChange = (event) => {
    const input = event.target.value;
    const decimalRegex = /^\d+$/;
    if (decimalRegex.test(input)) {
      setDecimalNumber(input);
      const binary = parseInt(input, 10).toString(2);
      setBinaryNumber(binary);
      calculateAll(binary);
    }
  };

  return (
    <div>
      <h2>Binary Calculator</h2>
      <label>
        Binary Number:
        <input type="text" value={binaryNumber} onChange={handleBinaryChange} />
      </label>
      <br />
      <label>
        Decimal Number:
        <input type="text" value={decimalNumber} onChange={handleDecimalChange} />
      </label>
      <br />
      <label>Hexadecimal Number: {hexadecimalNumber}</label>
      <br />
      <label>Octal Number: {octalNumber}</label>
      <br />
      <label>1's Complement: {onesComplement}</label>
      <br />
      <label>2's Complement: {twosComplement}</label>
    </div>
  );
};

export default page;
