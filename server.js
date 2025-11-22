const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const templates = [
  { id: 1, name: 'Modern Portfolio', description: 'A clean and modern portfolio template' },
  { id: 2, name: 'Business Landing', description: 'Professional landing page for businesses' },
  { id: 3, name: 'Creative Blog', description: 'A colorful blog template for creatives' },
];

const userWorks = [
  { id: 1, title: "Jane's Portfolio", description: 'Portfolio site created by Jane' },
  { id: 2, title: "Mike's Business Site", description: 'Business site created by Mike' },
  { id: 3, title: "Emma's Blog", description: 'Personal blog created by Emma' },
];

app.get('/', (req, res) => {
  res.send('Backend API for Personalization Website');
});

// Endpoint for templates
app.get('/api/templates', (req, res) => {
  res.json(templates);
});

// Endpoint for user works
app.get('/api/userworks', (req, res) => {
  res.json(userWorks);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
