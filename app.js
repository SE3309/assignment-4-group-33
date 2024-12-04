const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
const port = 5000;

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'healthub-schema'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});
global.db = db;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
const indexRoutes = require('./routes/index');
const activityRoutes = require('./routes/activity');
const nutritionRoutes = require('./routes/nutrition');
const healthRoutes = require('./routes/health');
const sessionsRoutes = require('./routes/sessions');
const workoutsRoutes = require('./routes/workoutplans');

app.use('/', indexRoutes);
app.use('/activity', activityRoutes);
app.use('/nutrition', nutritionRoutes);
app.use('/health', healthRoutes);
app.use('/sessions', sessionsRoutes);
app.use('/workouts', workoutsRoutes);

// Start Server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
