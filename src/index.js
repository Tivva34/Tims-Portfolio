import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Enable CORS so your React app (on another port) can access this API
app.use(cors());

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});