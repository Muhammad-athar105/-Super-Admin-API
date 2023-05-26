const express = require('express');
const connectDB = require('./config/db');
const hotelRoutes = require('./routes/hotelRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/hotels', hotelRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
