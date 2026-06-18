const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Connection (Neon)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use App Password here
  },
});

// Routes
app.get('/', (req, res) => {
  res.send('Ambika Makeup Studio Backend is running...');
});

// API endpoint to save appointments and send email
app.post('/api/appointments', async (req, res) => {
  console.log('>>> [BACKEND] Received a new request at:', new Date().toLocaleString());
  const { name, phone, email, service, date, message } = req.body;

  console.log('--- DATA RECEIVED ---');
  console.log('Name:', name);
  console.log('Phone:', phone);
  console.log('Email:', email || 'Not provided');
  console.log('----------------------');

  try {
    console.log('1. Saving to database...');
    const queryText = 'INSERT INTO appointments(name, phone, email, service, event_date, message) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [name, phone, email || null, service, date || null, message];
    const result = await pool.query(queryText, values);
    console.log('✅ 2. Database Save Successful');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Appointment: ${name} - ${service}`,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #D4AF37;">New Appointment Inquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email || 'Not provided'}</p>
          <p><b>Service:</b> ${service}</p>
          <p><b>Event Date:</b> ${date || 'Not specified'}</p>
          <p><b>Message:</b> ${message || 'No message'}</p>
          <hr>
          <p style="font-size: 12px; color: #888;">Sent from Ambika Makeup Studio Backend</p>
        </div>
      `,
    };

    // Send email in background
    transporter.sendMail(mailOptions)
      .then(() => console.log('✅ 3. Email notification sent'))
      .catch(err => console.error('❌ 3. Email notification failed:', err.message));

    // Respond immediately
    console.log('4. Sending success response to frontend');
    res.status(201).json({
      message: 'Booking successful',
      data: result.rows[0]
    });

  } catch (err) {
    console.error('❌ ERROR:', err.message);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
