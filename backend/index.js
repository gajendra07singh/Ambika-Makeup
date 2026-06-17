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
  const { name, phone, email, service, date, message } = req.body;
  console.log('Received booking request for:', name);

  // 1. Send Email Notification (Independent)
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Appointment: ${name} - ${service}`,
    html: `
      <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #D4AF37;">New Appointment Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Event Date:</b> ${date || 'Not specified'}</p>
        <p><b>Message:</b> ${message}</p>
        <hr>
        <p style="font-size: 12px; color: #888;">Sent from Ambika Makeup Studio Backend</p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });

  // 2. Save to Database
  try {
    const queryText = 'INSERT INTO appointments(name, phone, email, service, event_date, message) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [name, phone, email, service, date || null, message];
    const result = await pool.query(queryText, values);
    console.log('Data saved to database');
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Database Error:', err.message);
    // Still return 201 if email was triggered, or 500 if you want to be strict
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
