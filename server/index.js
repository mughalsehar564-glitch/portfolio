const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from frontend build (for combined deployment)
if (process.env.SERVE_FRONTEND === 'true') {
  const distPath = path.join(__dirname, '..', 'folio', 'dist');
  app.use(express.static(distPath));
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// MongoDB Connection
console.log('Attempting to connect to MongoDB...');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4
})
  .then(() => {
    console.log('------------------------------------');
    console.log('SUCCESS: MongoDB Connected successfully');
    console.log('------------------------------------');
  })
  .catch(err => {
    console.log('------------------------------------');
    console.log('ERROR: MongoDB Connection Failed');
    console.error('Reason:', err.message);
    if (err.message.includes('querySrv') || err.message.includes('ECONNREFUSED')) {
      console.log('\nTIP: DNS SRV lookup is blocked. Try these steps:');
      console.log('1. In Atlas, go to Connect -> Drivers -> Node.js');
      console.log('2. Select version 2.2.12 or later to get STANDARD connection string (without +srv)');
      console.log('3. Replace the MONGODB_URI in .env with that standard connection string');
    } else if (err.message.includes('SSL') || err.message.includes('alert number 80')) {
      console.log('\nTIP: Your IP is likely not whitelisted in MongoDB Atlas.');
      console.log('Go to: Network Access -> Add IP Address -> 0.0.0.0/0');
    }
    console.log('------------------------------------');
  });

// Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
  }
});

app.get('/', (req, res) => {
  res.send('Portfolio Server is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
