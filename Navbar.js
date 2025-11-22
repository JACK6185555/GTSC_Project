import React from 'react';

function Navbar() {
  return (
    <nav className="bg-purple-600 p-4 text-white flex justify-between items-center">
      <div className="text-lg font-bold">Personalization Website</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/editor" className="hover:underline">Editor</a>
        <a href="/ai-advice" className="hover:underline">AI Advice</a>
      </div>
    </nav>
  );
}

export default Navbar;
