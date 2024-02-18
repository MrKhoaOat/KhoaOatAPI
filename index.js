// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// เส้นทางสำหรับ API ตัวอย่าง
app.get('/', (req, res) => {
  // ส่งข้อมูล JSON กลับไปยังผู้ใช้
  res.json({ message: 'This is sample data from the API' });
});

// เปิดพอร์ตและเริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
