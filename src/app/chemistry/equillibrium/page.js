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
    <div className='h-screen -mt-5'>
          <div className='bg-violet-300 h-full w-screen '>
      <h2 className='border-2 rounded-md my-4 mx-4 w-96 text-center bg-sky-200 text-3xl'>Equilibrium Calculator</h2>
      <div>
        <h3 className='border-2 rounded-md my-4 mx-4 w-60 bg-red-200'>Reactants</h3>
        <input
          type="number"
          value={reactants.A}
          className='border-2 rounded-md my-4 mx-4'
          onChange={(e) => handleInputChange(e, 'reactant', 'A')}
          placeholder="Concentration/Pressure of A"
        />
        <input
          type="number"
          value={reactants.B}
          className='border-2 rounded-md my-4 mx-4'
          onChange={(e) => handleInputChange(e, 'reactant', 'B')}
          placeholder="Concentration/Pressure of B"
        />
      </div>
      <div>
        <h3 className='border-2 rounded-md my-4 mx-4 w-60 bg-red-200'>Products</h3>
        <input
          type="number"
          value={products.C}
          className='border-2 rounded-md my-4 mx-4'
          onChange={(e) => handleInputChange(e, 'product', 'C')}
          placeholder="Concentration/Pressure of C"
        />
        <input
          type="number"
          value={products.D}
          className='border-2 rounded-md my-4 mx-4'
          onChange={(e) => handleInputChange(e, 'product', 'D')}
          placeholder="Concentration/Pressure of D"
        />
      </div>
      <div>
        <h3 className='border-2 rounded-md my-4 mx-4 w-60 bg-red-200'>Kc</h3>
        <input
          type="number"
          value={kc}
          className='border-2 rounded-md my-4 mx-4'
          onChange={(e) => handleInputChange(e, 'kc')}
          placeholder="Enter Kc value"
        />
      </div>
      <button onClick={calculateKp} className='bg-green-200 border-rose-300 rounded-lg mt-0 ml-10 mb-6'>Calculate Kp</button>
      <button onClick={calculateKcFromKp} className='bg-green-200 border-rose-300 rounded-lg mt-0 ml-10 mb-6'>Calculate Kc from Kp</button>

      {kp !== null && <p>Kp: {kp}</p>}
      {kc !== null && <p>Kc: {kc}</p>}

      <div>
        <h3 className='border-2 rounded-md my-4 mx-4 w-60 bg-red-200'>Relationship between Kp and Kc</h3>
        <p className='border-2 rounded-md my-4 mx-4 w-[60rem] bg-red-200'>
          The relationship between Kp and Kc is given by: <br />
          Kp = Kc * (RT)^Δn <br></br>
          Where Kp and Kc are the equilibrium constants, R is the gas constant, T is the temperature in Kelvin, and Δn is the
          difference in the number of moles of gaseous products and gaseous reactants.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Page;