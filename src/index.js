import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());


app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
