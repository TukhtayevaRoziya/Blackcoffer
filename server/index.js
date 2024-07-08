const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const dataRoutes = require('./routes/data'); 

const app = express();
const port = process.env.PORT || 5000; 

mongoose.connect('mongodb://localhost:27017/blackcoffer-dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json()); 

app.use('/api/data', dataRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));