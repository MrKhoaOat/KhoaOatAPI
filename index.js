// Import Express.js
const express = require('express');

// สร้าง instance ของ Express
const app = express();

// กำหนดพอร์ตที่ API จะรัน
const PORT = 3000;

// กำหนด route สำหรับ API
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'สวัสดีจาก API!' });
});

// เริ่มรับคำขอ
app.listen(PORT, () => {
  console.log(`เซิร์ฟเวอร์ API กำลังรันที่พอร์ต ${PORT}`);
});
