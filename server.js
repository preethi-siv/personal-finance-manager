const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenses');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();  // Connect to MongoDB

app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
