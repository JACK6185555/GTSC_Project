import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TemplateGallery from './components/TemplateGallery';
import UserWorks from './components/UserWorks';
import Editor from './components/Editor';
import GrokAIChat from './components/GrokAIChat';

function Home() {
  const [selectedTemplate, setSelectedTemplate] = React.useState(null);

  return (
    <div>
      <TemplateGallery onSelect={setSelectedTemplate} />
      <UserWorks />
      {selectedTemplate && (
        <div className="p-4 bg-white mt-4 rounded shadow text-center">
          <h3 className="font-bold text-lg">Selected Template:</h3>
          <p>{selectedTemplate.name}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/ai-advice" element={<GrokAIChat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
