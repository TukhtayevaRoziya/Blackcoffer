const express = require('express');
const router = express.Router();
const Data = require('../models/Data'); // Import your Data model

router.get('/', async (req, res) => {
    try {
        const data = await Data.find(); 
        res.json(data); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add routes for filtering data (e.g., /api/data/byYear/:year)
// ...

module.exports = router;