import React, { useEffect, useState } from 'react';

function UserWorks() {
  const [userWorks, setUserWorks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/userworks')
      .then((response) => response.json())
      .then((data) => setUserWorks(data))
      .catch((error) => console.error('Error fetching user works:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Explore User Creations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {userWorks.map((work) => (
          <div key={work.id} className="border rounded-lg hover:shadow-lg cursor-pointer p-4">
            <div className="font-semibold text-center">{work.title}</div>
            <p className="text-center text-gray-600">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserWorks;
