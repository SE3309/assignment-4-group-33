const express = require('express');
const router = express.Router();

// View activity logs
router.get('/', (req, res) => {
    const query = 'SELECT * FROM ActivityLog';
    db.query(query, (err, result) => {
        if (err) throw err;
        res.render('activity', { title: 'Activity Logs', activities: result });
    });
});

// Add a new activity log
router.post('/add', (req, res) => {
    const { UserID, ActivityType, CaloriesBurned, DateOfActivity, DistanceTraveled, Duration } = req.body;
    const query = `
        INSERT INTO ActivityLog (UserID, ActivityType, CaloriesBurned, DateOfActivity, DistanceTraveled, Duration)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [UserID, ActivityType, CaloriesBurned, DateOfActivity, DistanceTraveled, Duration], (err) => {
        if (err) throw err;
        res.redirect('/activity');
    });
});

module.exports = router;
