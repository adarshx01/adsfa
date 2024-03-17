'use client'
import React, { useState } from 'react';

const Page = () => {
  const [acid, setAcid] = useState('');
  const [base, setBase] = useState('');
  const [acidConcentration, setAcidConcentration] = useState('');
  const [baseConcentration, setBaseConcentration] = useState('');
  const [finalVolume, setFinalVolume] = useState('');
  const [ph, setPh] = useState('');
  const [bufferType, setBufferType] = useState('');

  const calculateBuffer = () => {
    const acidMoles = parseFloat(acidConcentration) * parseFloat(finalVolume) * 0.6;
    const baseMoles = parseFloat(baseConcentration) * parseFloat(finalVolume) * 0.6;
    const totalMoles = acidMoles + baseMoles;
    const bufferType = acid ? 'Acidic Buffer' : 'Alkaline Buffer';

    const phValue = parseFloat(ph);

    if (acid && base) {
      alert('Please select either Acid or Base, not both.');
      return;
    }

    if (!acid && !base) {
      alert('Please select either Acid or Base.');
      return;
    }

    if (!ph) {
      alert('Please input the desired pH.');
      return;
    }

    if (!acidConcentration || !baseConcentration || !finalVolume) {
      alert('Please fill in all fields.');
      return;
    }

    if (isNaN(acidMoles) || isNaN(baseMoles)) {
      alert('Invalid concentration values.');
      return;
    }

    let finalBuffer = {};

    if (acid) {
      const saltConcentration = (acidMoles + parseFloat(acidConcentration) * parseFloat(finalVolume)) / parseFloat(finalVolume);
      const bufferPH = -Math.log10(saltConcentration) + Math.log10(acidMoles / totalMoles);
      finalBuffer = { saltConcentration, bufferPH };
    } else {
      const saltConcentration = (baseMoles + parseFloat(baseConcentration) * parseFloat(finalVolume)) / parseFloat(finalVolume);
      const bufferPH = 14 + Math.log10(saltConcentration) - Math.log10(baseMoles / totalMoles);
      finalBuffer = { saltConcentration, bufferPH };
    }

    setBufferType(bufferType);
    setPh(finalBuffer.bufferPH.toFixed(2));
  };

  return (
    <div>
      <h2>Buffer Solution Calculator</h2>
      <label>
        Select Buffer Type:
        <select value={acid ? 'Acid' : 'Base'} onChange={(e) => (e.target.value === 'Acid' ? setAcid(true) : setAcid(false))}>
          <option value="Acid">Acid</option>
          <option value="Base">Base</option>
        </select>
      </label>
      <br />
      <label>
        {acid ? 'Acid' : 'Base'}:
        <input type="text" value={acid ? acid : base} onChange={(e) => (acid ? setAcid(e.target.value) : setBase(e.target.value))} />
      </label>
      <br />
      <label>
        {acid ? 'Acid' : 'Base'} Concentration (M):
        <input
          type="number"
          value={acid ? acidConcentration : baseConcentration}
          onChange={(e) => (acid ? setAcidConcentration(e.target.value) : setBaseConcentration(e.target.value))}
        />
      </label>
      <br />
      <label>
        Final Volume (L):
        <input type="number" value={finalVolume} onChange={(e) => setFinalVolume(e.target.value)} />
      </label>
      <br />
      <label>
        Desired pH:
        <input type="number" value={ph} onChange={(e) => setPh(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBuffer}>Calculate Buffer</button>
      <br />
      {ph && <p>Buffer Type: {bufferType}</p>}
      {ph && <p>Final pH: {ph}</p>}
    </div>
  );
};

export default Page;
