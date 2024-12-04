const express = require('express');
const router = express.Router();

// View health metrics
router.get('/', (req, res) => {
    const query = 'SELECT * FROM HealthMetrics';
    db.query(query, (err, result) => {
        if (err) throw err;
        res.render('health', { title: 'Health Metrics', metrics: result });
    });
});

// Add or update health metrics
router.post('/update', (req, res) => {
    const { HealthMetricID, UserID, BMI, HeartRate, SleepQuality, BodyFat, CaloriesBurnedPerDay } = req.body;
    const query = `
        INSERT INTO HealthMetrics (HealthMetricID, UserID, BMI, HeartRate, SleepQuality, BodyFat, CaloriesBurnedPerDay)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
        BMI = VALUES(BMI),
        HeartRate = VALUES(HeartRate),
        SleepQuality = VALUES(SleepQuality),
        BodyFat = VALUES(BodyFat),
        CaloriesBurnedPerDay = VALUES(CaloriesBurnedPerDay)
    `;
    db.query(query, [HealthMetricID, UserID, BMI, HeartRate, SleepQuality, BodyFat, CaloriesBurnedPerDay], (err) => {
        if (err) throw err;
        res.redirect('/health');
    });
});

module.exports = router;
