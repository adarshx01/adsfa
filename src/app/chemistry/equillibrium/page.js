'use client'
import React, { useState } from 'react';

const Page = () => {
  const [reactants, setReactants] = useState({ A: '', B: '' });
  const [products, setProducts] = useState({ C: '', D: '' });
  const [kp, setKp] = useState(null);
  const [kc, setKc] = useState(null);

  const handleInputChange = (event, type, species) => {
    const value = event.target.value;
    if (type === 'reactant') {
      setReactants({ ...reactants, [species]: value });
    } else if (type === 'product') {
      setProducts({ ...products, [species]: value });
    } else if (type === 'kc') {
      setKc(value);
    }
  };

  const calculateKp = () => {
    const { A, B } = reactants;
    const { C, D } = products;
    if (A && B && C && D) {
      const kpValue = (parseFloat(C) * parseFloat(D)) / (parseFloat(A) * parseFloat(B));
      setKp(kpValue);
    } else {
      alert('Please enter all values for reactants and products.');
    }
  };

  const calculateKcFromKp = () => {
    const deltaN = (Object.keys(products).length + Object.keys(reactants).length) / 2;
    if (kc) {
      const kcValue = kc / Math.pow(0.0821, deltaN);
      setKp(kcValue);
    } else {
      alert('Please enter a value for Kc.');
    }
  };

  return (
    <div>
      <h2>Equilibrium Calculator</h2>
      <div>
        <h3>Reactants</h3>
        <input
          type="number"
          value={reactants.A}
          onChange={(e) => handleInputChange(e, 'reactant', 'A')}
          placeholder="Concentration/Pressure of A"
        />
        <input
          type="number"
          value={reactants.B}
          onChange={(e) => handleInputChange(e, 'reactant', 'B')}
          placeholder="Concentration/Pressure of B"
        />
      </div>
      <div>
        <h3>Products</h3>
        <input
          type="number"
          value={products.C}
          onChange={(e) => handleInputChange(e, 'product', 'C')}
          placeholder="Concentration/Pressure of C"
        />
        <input
          type="number"
          value={products.D}
          onChange={(e) => handleInputChange(e, 'product', 'D')}
          placeholder="Concentration/Pressure of D"
        />
      </div>
      <div>
        <h3>Kc</h3>
        <input
          type="number"
          value={kc}
          onChange={(e) => handleInputChange(e, 'kc')}
          placeholder="Enter Kc value"
        />
      </div>
      <button onClick={calculateKp}>Calculate Kp</button>
      <button onClick={calculateKcFromKp}>Calculate Kc from Kp</button>

      {kp !== null && <p>Kp: {kp}</p>}
      {kc !== null && <p>Kc: {kc}</p>}

      <div>
        <h3>Relationship between Kp and Kc</h3>
        <p>
          The relationship between Kp and Kc is given by: <br />
          Kp = Kc * (RT)^Δn
        </p>
        <p>
          Where Kp and Kc are the equilibrium constants, R is the gas constant, T is the temperature in Kelvin, and Δn is the
          difference in the number of moles of gaseous products and gaseous reactants.
        </p>
      </div>
    </div>
  );
};

export default Page;