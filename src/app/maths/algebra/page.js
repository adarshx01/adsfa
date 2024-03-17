'use client'
import React, { useState } from 'react';

function page() {
  const [quadraticCoefficients, setQuadraticCoefficients] = useState({ a: 0, b: 0, c: 0 });
  const [cubicCoefficients, setCubicCoefficients] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [quadraticRoots, setQuadraticRoots] = useState([]);
  const [cubicRoots, setCubicRoots] = useState([]);

  const solveQuadratic = () => {
    const { a, b, c } = quadraticCoefficients;
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setQuadraticRoots([root1, root2]);
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      setQuadraticRoots([root]);
    } else {
      setQuadraticRoots([]);
    }
  };

  const solveCubic = () => {
    const { a, b, c, d } = cubicCoefficients;
    const roots = [];

    // Implementing cubic equation solver
    if (a === 0) {
      // Not a cubic equation
      setCubicRoots([]);
      return;
    }

    const delta0 = c / a - (b * b) / (3 * a * a);
    const delta1 = (2 * Math.pow(b / a, 3) - 9 * b * c / Math.pow(a, 2) + 27 * d / a) / 27;
    const delta = Math.pow(delta1 / 2, 2) + Math.pow(delta0 / 3, 3);
    const solution = { re: 0, im: 0 };

    if (delta > 0) {
      const u = (Math.cbrt(-delta1 / 2 + Math.sqrt(delta)) + Math.cbrt(-delta1 / 2 - Math.sqrt(delta)));
      const root = u - b / (3 * a);
      roots.push(root);
    } else if (delta === 0) {
      const u = (Math.cbrt(-delta1 / 2));
      const root = 2 * u - b / (3 * a);
      roots.push(root);
    } else {
      const T = Math.acos((-delta1 / 2) / Math.sqrt(Math.pow(-delta0 / 3, 3)));
      const u1 = 2 * Math.cbrt(-delta0 / 3);
      const root1 = u1 * Math.cos(T / 3) - b / (3 * a);
      const root2 = u1 * Math.cos((T + 2 * Math.PI) / 3) - b / (3 * a);
      const root3 = u1 * Math.cos((T + 4 * Math.PI) / 3) - b / (3 * a);
      roots.push(root1, root2, root3);
    }

    setCubicRoots(roots);
  };

  return (
    <div className=' flex flex-col items-center justify-center h-[100vh] -mt-24'>
      <h2>Quadratic & Cubic Equation Solver</h2>

      {/* Quadratic Equation */}
      <div className=' bg-red-200 border-4 w-[50rem] rounded-3xl mb-20 p-4' >
        <h3>Quadratic Equation Solver</h3>
        <label>
          Coefficient a:
          <input
            type="number"
            value={quadraticCoefficients.a}
            onChange={(e) =>
              setQuadraticCoefficients({ ...quadraticCoefficients, a: parseFloat(e.target.value) })
            } className='w-[10rem] bg-sky-200 border-2 rounded-3xl px-4 ml-2' 
          />
        </label>
        <label>
          Coefficient b:
          <input
            type="number"
            value={quadraticCoefficients.b}
            onChange={(e) =>
              setQuadraticCoefficients({ ...quadraticCoefficients, b: parseFloat(e.target.value) })
            }
            className='w-[10rem] bg-sky-200 border-2 rounded-3xl px-4 ml-2' 
          />
        </label>
        <label>
          Coefficient c:
          <input
            type="number"
            value={quadraticCoefficients.c}
            onChange={(e) =>
              setQuadraticCoefficients({ ...quadraticCoefficients, c: parseFloat(e.target.value) })
            }
            className='w-[10rem] bg-sky-200 border-2 rounded-3xl px-4 ml-2' 
          />
        </label>
        <button onClick={solveQuadratic} className='bg-slate-400 hover:bg-green-300 rounded-md ml-20 mt-4 h-10' >Solve Quadratic Equation</button>
        <div>Roots: {quadraticRoots.length === 0 ? 'No real roots' : quadraticRoots.join(', ')}</div>
      </div>

      {/* Cubic Equation */}
      <div className='bg-red-200 border-4 w-[50rem] rounded-3xl p-6'>
        <h3>Cubic Equation Solver</h3>
        <label>
          Coefficient a:
          <input
            type="number"
            value={cubicCoefficients.a}
            onChange={(e) =>
              setCubicCoefficients({ ...cubicCoefficients, a: parseFloat(e.target.value) })
            }
            className='w-[10rem] bg-sky-200 border-2 rounded-3xl px-4 ml-2' 
          />
        </label>
        <label>
          Coefficient b:
          <input
            type="number"
            value={cubicCoefficients.b}
            onChange={(e) =>
              setCubicCoefficients({ ...cubicCoefficients, b: parseFloat(e.target.value) })
            }
            className='w-[10rem] bg-sky-200 border-2 rounded-3xl px-4 ml-2' 
          />
        </label>
        <label>
          Coefficient c:
          <input
            type="number"
            value={cubicCoefficients.c}
            onChange={(e) =>
              setCubicCoefficients({ ...cubicCoefficients, c: parseFloat(e.target.value) })
            }
            className='w-[10rem] bg-sky-200 border-2 rounded-3xl px-4 ml-2' 
          />
        </label>
        <label>
          Coefficient d:
          <input
            type="number"
            value={cubicCoefficients.d}
            onChange={(e) =>
              setCubicCoefficients({ ...cubicCoefficients, d: parseFloat(e.target.value) })
            }
            className='w-[10rem] bg-sky-200 border-2 rounded-3xl px-4 ml-2' 
          />
        </label>
        <button onClick={solveCubic} className='bg-slate-400 h-10 p-2 hover:bg-green-300 rounded-md ml-20 mt-4'>Solve Cubic Equation</button>
        <div>Roots: {cubicRoots.length === 0 ? 'No real roots' : cubicRoots.join(', ')}</div>
      </div>
    </div>
  );
}

export default page;
