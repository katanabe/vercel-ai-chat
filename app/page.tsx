'use client';

import { useCompletion } from 'ai/react';

function SloganGenerator() {
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion();

  return (
    <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
      <form onSubmit={handleSubmit}>
        <input
          className='fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-zinc-900'
          value={input}
          placeholder='Send a message...'
          onChange={handleInputChange}
        />
      </form>
      <div className='my-6 whitespace-pre-wrap'>{completion}</div>
    </div>
  );
}

export default SloganGenerator;
