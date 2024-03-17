'use client'
import React, { useState } from 'react';
import Link from 'next/link'
const Page = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSolve = async () => {
    if (!image) {
      return;
    }

    const url = 'https://photomath1.p.rapidapi.com/maths/solve-problem';
    const data = new FormData();
    data.append('locale', 'en');
    data.append('image', image);

    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '8ec414deb4msh5be66e353d98cb9p19dfe7jsn6d7d596b4635',
        'X-RapidAPI-Host': 'photomath1.p.rapidapi.com',
      },
      body: data,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Photomath Solver</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} className='rounded-2xl border-4 outline-dashed bg-slate-500 ml-6' />
      <button onClick={handleSolve} disabled={!image} className='ml-6 rounded-2xl border-4 outline-dashed bg-slate-500 w-20'>
        Solve
      </button>
      {result && <pre className='bg-grey-200 border-2 rounded-2xl  px-4 pb-40 mt-20 -ml-16 h-[18rem] w-[30rem]'>{result}</pre>}

      <button className="button mt-20 ml-20 border-2 rounded-md bg-slate-400" ><Link href='maths/algebra'>Algebra</Link></button>
      <button className="button mt-20 ml-60   border-2 rounded-md bg-slate-400" ><Link href='maths/matrix'>Matrix</Link></button>
    </div>
  );
};

export default Page;