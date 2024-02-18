const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const PORT = 3000;

app.get('/api/data', (req, res) => {
  const results = [];
  fs.createReadStream('movies.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    });
});

app.listen(PORT, () => {
  console.log(`เซิร์ฟเวอร์ API กำลังรันที่พอร์ต ${PORT}`);
});
