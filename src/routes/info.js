const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  const governancePath = path.join(__dirname, '../../GOVERNANCE.md');
  fs.readFile(governancePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to load governance text' });
    }
    res.json({ governance: data });
  });
});

module.exports = router;
