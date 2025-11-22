import React, { useEffect, useState } from 'react';

function TemplateGallery({ onSelect }) {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/templates')
      .then((response) => response.json())
      .then((data) => setTemplates(data))
      .catch((error) => console.error('Error fetching templates:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Choose a Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded-lg cursor-pointer hover:shadow-lg"
            onClick={() => onSelect(template)}
          >
            <div className="p-4 font-semibold text-center">{template.name}</div>
            <p className="p-2 text-center text-gray-600">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateGallery;
