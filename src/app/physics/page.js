'use client'
import React, { useState } from 'react';

const Page = () => {
  const [power, setPower] = useState('');
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [focalDistance, setFocalDistance] = useState('');
  const [imageFormationDistance, setImageFormationDistance] = useState('');
  const [energyOfNuclearEmission, setEnergyOfNuclearEmission] = useState('');
  const [mass1, setMass1] = useState('');
  const [mass2, setMass2] = useState('');
  const [speedOfLight, setSpeedOfLight] = useState('');
  const [time, setTime] = useState('');
  const [distance, setDistance] = useState('');
  const [velocity, setVelocity] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [force, setForce] = useState('');

  const handleInputChange = (event, setter) => {
    const inputValue = event.target.value;
    setter(inputValue);
  };

  const calculatePower = () => {
    const result = voltage * current;
    setPower(result);
  };

  const calculateFocalDistance = () => {
    if (!voltage || !imageFormationDistance) {
      alert('Please enter voltage and image formation distance.');
      return;
    }
    const result = (voltage * imageFormationDistance) / (voltage - imageFormationDistance);
    setFocalDistance(result);
  };

  const calculateEnergyOfNuclearEmission = () => {
    const result = mass1 * (speedOfLight ** 2);
    setEnergyOfNuclearEmission(result);
  };

  const calculateTime = () => {
    const result = distance / velocity;
    setTime(result);
  };

  const calculateVelocity = () => {
    const result = distance / time;
    setVelocity(result);
  };

  const calculateAcceleration = () => {
    const result = velocity / time;
    setAcceleration(result);
  };

  const calculateForce = () => {
    const result = mass2 * acceleration;
    setForce(result);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-4xl pb-6">Physics Calculator</h2>
      <div className="grid grid-cols-3 gap-4 mx-20">
        <div className='border-4 w-96 rounded-3xl p-4'>
          <div>
            <label className="block mb-2">
              Voltage (V):
              <input
                type="number"
                className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
                value={voltage}
                onChange={(e) => handleInputChange(e, setVoltage)}
              />
            </label>
            <label className="block mb-2">
              Current (I):
              <input
                type="number"
                className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
                value={current}
                onChange={(e) => handleInputChange(e, setCurrent)}
              />
            </label>
          </div>
          <label className="block mb-2">
            Power (P = VI):
            <input
              type="number"
              className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
              value={power}
              onChange={(e) => handleInputChange(e, setPower)}
            />
          </label>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2" onClick={calculatePower}>
            Calculate Power
          </button>
        </div>
        
        <div className='border-4 w-96 rounded-3xl p-4'>
          <div>
            <label className="block mb-2">
              Image Formation Distance:
              <input
                type="number"
                className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
                value={imageFormationDistance}
                onChange={(e) => handleInputChange(e, setImageFormationDistance)}
              />
            </label>
          </div>
          <label className="block mb-2">
            Focal Distance:
            <input
              type="number"
              className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
              value={focalDistance}
              onChange={(e) => handleInputChange(e, setFocalDistance)}
            />
          </label>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2" onClick={calculateFocalDistance}>
            Calculate Focal Distance
          </button>
        </div>
        <div className='border-4 w-96 rounded-3xl p-4'>
          <div>
            <label className="block mb-2">
              Mass (m1):
              <input
                type="number"
                className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
                value={mass1}
                onChange={(e) => handleInputChange(e, setMass1)}
              />
            </label>
            <label className="block mb-2">
              Speed of Light:
              <input
                type="number"
                className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
                value={speedOfLight}
                onChange={(e) => handleInputChange(e, setSpeedOfLight)}
              />
            </label>
          </div>
          <label className="block mb-2">
            Energy of Nuclear Emission:
            <input
              type="number"
              className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
              value={energyOfNuclearEmission}
              onChange={(e) => handleInputChange(e, setEnergyOfNuclearEmission)}
            />
          </label>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
            onClick={calculateEnergyOfNuclearEmission}
          >
            Calculate Energy of Nuclear Emission
          </button>
        </div>
        <div className='border-4 w-96 rounded-3xl p-4'>
        <div>
          <label className="block mb-2">
            Time:
            <input
              type="number"
              className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
              value={time}
              onChange={(e) => handleInputChange(e, setTime)}
            />
          </label>
          <label className="block mb-2">
            Distance:
            <input
              type="number"
              className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
              value={distance}
              onChange={(e) => handleInputChange(e, setDistance)}
            />
          </label>
        </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2" onClick={calculateVelocity}>
            Calculate Velocity
          </button>
        </div>
        <div className='border-4 w-96 rounded-3xl p-4'>
        <label className="block mb-2">
            Velocity:
            <input
              type="number"
              className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
              value={velocity}
              onChange={(e) => handleInputChange(e, setVelocity)}
            />
          </label>
          <div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2" onClick={calculateTime}>
            Calculate Time
          </button>
        </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2" onClick={calculateAcceleration}>
            Calculate Acceleration
          </button>
        </div>
        <div className='border-4 w-96 rounded-3xl p-4'>
        <div>
        <div>
          <label className="block mb-2">
            Acceleration:
            <input
              type="number"
              className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
              value={acceleration}
              onChange={(e) => handleInputChange(e, setAcceleration)}
            />
          </label>
          <label className="block mb-2">
            Mass (m2):
            <input
              type="number"
              className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
              value={mass2}
              onChange={(e) => handleInputChange(e, setMass2)}
            />
          </label>
        </div>
          <label className="block mb-2">
            Force:
            <input
              type="number"
              className="border-2 border-gray-300 rounded-xl ml-2 p-2 w-24 bg-sky-200 mt-1"
              value={force}
              onChange={(e) => handleInputChange(e, setForce)}
            />
          </label>
        </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2" onClick={calculateForce}>
            Calculate Force
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Page;
