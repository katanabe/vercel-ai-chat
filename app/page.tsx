'use client';

import { useCompletion, useChat } from 'ai/react';

function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          className='fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-zinc-900'
          value={input}
          placeholder='Send a message...'
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default ChatPage;
