import React, { useState } from 'react';

function GrokAIChat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! How can I assist you with your website design today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now(), sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMessage]);

    // Simulate AI response, replace with Grok AI API integration
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `AI advice on: "${input}" (This is a simulated response. Integration with Grok AI API needed.)`,
      };
      setMessages((msgs) => [...msgs, botResponse]);
    }, 1500);

    setInput('');
  };

  return (
    <div className="p-4 flex flex-col h-full max-w-md mx-auto bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Grok AI Advisor</h2>
      <div className="flex-grow overflow-auto border p-2 mb-4 rounded">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 p-2 rounded ${
              msg.sender === 'user' ? 'bg-purple-200 text-right' : 'bg-gray-200 text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Ask for advice..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded-l px-3 py-2"
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-purple-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default GrokAIChat;
