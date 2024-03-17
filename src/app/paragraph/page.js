'use client'
import React, { useState } from 'react';

const Page = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [newTextResult, setNewTextResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '8ec414deb4msh5be66e353d98cb9p19dfe7jsn6d7d596b4635',
        'X-RapidAPI-Host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com'
      },
      body: JSON.stringify({
        text: text,
        language: 'en',
        includeCitations: false,
        scrapeSources: false
      })
    };

    try {
      const response = await fetch(url, options);
      const jsonResult = await response.json();
      setResult(jsonResult);
      setNewTextResult('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    setText('');
    setResult(null);
    setNewTextResult('');
  };

  const handleNewTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setNewTextResult(`Plagiarism result for "${newText}": ${result?.percentPlagiarism}%`);
  };

  return (
    <div className='containered h-screen w-screen flex flex-col'>
      <div className='flex flex-col ml-[29%] pt-10 h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <textarea
          value={text}
          onChange={handleNewTextChange}
          placeholder="Enter text to check for plagiarism"
          className='w-[40rem] h-[20rem] rounded-3xl p-4'
        />
        <div className='flex mt-6'> 
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 w-[12rem] rounded-full'>Check Plagiarism</button>
        <button type="button" className='bg-sky-500 hover:bg-red-700 text-white font-bold py-2 px-4  w-32 ml-8 rounded-full' onClick={handleReset}>Reset</button>
        </div>
      </form>
      {result && (
        <div className='p-2 bg-white border-4 rounded-lg w-[40rem] mt-10'>
          <p>Plagiarism Percentage: {result.percentPlagiarism}%</p>
          <h3>Sources:</h3>
          <ul>
            {result.sources.slice(0, 3).map((source, index) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
            {result.sources.length > 3 && <li>And {result.sources.length - 3} more...</li>}
          </ul>
        </div>
      )}
      {newTextResult && <p>{newTextResult}</p>}
      </div>
    </div>
  );
};

export default Page;