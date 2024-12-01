require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./router/userRouter.js');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// Database Connection

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api', employeeRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
