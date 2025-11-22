import React, { useState, useEffect } from 'react';

function Editor() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Load saved elements from localStorage on mount
    const savedElements = localStorage.getItem('editorElements');
    if (savedElements) {
      setElements(JSON.parse(savedElements));
    }
  }, []);

  const addTextElement = () => {
    const newElement = {
      id: Date.now(),
      type: 'text',
      content: 'New Text',
      style: { color: '#000000', fontSize: '16px' },
    };
    setElements([...elements, newElement]);
  };

  const updateLastElementColor = (color) => {
    if (elements.length === 0) return;
    const updatedElements = [...elements];
    updatedElements[updatedElements.length - 1] = {
      ...updatedElements[updatedElements.length - 1],
      style: { ...updatedElements[updatedElements.length - 1].style, color },
    };
    setElements(updatedElements);
  };

  const saveElements = () => {
    localStorage.setItem('editorElements', JSON.stringify(elements));
    alert('Elements saved!');
  };

  const loadElements = () => {
    const savedElements = localStorage.getItem('editorElements');
    if (savedElements) {
      setElements(JSON.parse(savedElements));
      alert('Elements loaded!');
    } else {
      alert('No saved elements found');
    }
  };

  const exportPreview = () => {
    const htmlContent = elements
      .map(
        (el) =>
          `<div style="color:${el.style.color}; font-size:${el.style.fontSize}; margin-bottom: 8px;">${el.content}</div>`
      )
      .join('');
    const previewWindow = window.open('', '_blank');
    if (previewWindow) {
      previewWindow.document.write(`
        <html>
          <head><title>Preview</title></head>
          <body>${htmlContent}</body>
        </html>
      `);
      previewWindow.document.close();
    }
  };

  return (
    <div className="p-4 flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Website Editor</h2>
      <div className="mb-4 space-x-4">
        <button
          onClick={addTextElement}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Add Text Element
        </button>
        <button
          onClick={saveElements}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save
        </button>
        <button
          onClick={loadElements}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Load
        </button>
        <button
          onClick={exportPreview}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Export Preview
        </button>
        <input
          type="color"
          onChange={(e) => updateLastElementColor(e.target.value)}
          title="Change color of last text element"
          className="ml-4 h-10 w-10 cursor-pointer rounded border border-gray-300"
        />
      </div>
      <div className="flex-grow border border-gray-400 bg-white rounded p-4 overflow-auto">
        {elements.length === 0 && (
          <p className="text-gray-500 text-center">No elements yet. Add some!</p>
        )}
        {elements.map((el) => (
          <div
            key={el.id}
            style={{ color: el.style.color, fontSize: el.style.fontSize }}
            className="mb-2"
            contentEditable
            suppressContentEditableWarning
          >
            {el.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Editor;
