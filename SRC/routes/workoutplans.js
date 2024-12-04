const express = require('express');
const router = express.Router();

// View workout plans
router.get('/', (req, res) => {
    const query = `
        SELECT WorkoutPlans.*, Trainer.Name AS TrainerName, ClientProfile.Goals AS ClientGoals
        FROM WorkoutPlans
        JOIN Trainer ON WorkoutPlans.TrainerID = Trainer.TrainerID
        JOIN ClientProfile ON WorkoutPlans.ClientID = ClientProfile.ClientID
    `;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.render('workouts', { title: 'Workout Plans', plans: result });
    });
});

// Add or update a workout plan
router.post('/add', (req, res) => {
    const { WorkoutPlanID, ClientID, TrainerID, WorkoutPlan, Frequency } = req.body;
    const query = `
        INSERT INTO WorkoutPlans (WorkoutPlanID, ClientID, TrainerID, WorkoutPlan, Frequency)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(query, [WorkoutPlanID, ClientID, TrainerID, WorkoutPlan, Frequency], (err) => {
        if (err) throw err;
        res.redirect('/workouts');
    });
});

module.exports = router;
