const express = require('express');
const router = express.Router();

// View nutrition logs
router.get('/', (req, res) => {
    const query = 'SELECT * FROM NutritionLog';
    db.query(query, (err, result) => {
        if (err) throw err;
        res.render('nutrition', { title: 'Nutrition Logs', logs: result });
    });
});

// Add a new meal log
router.post('/add', (req, res) => {
    const { UserID, MealName, CalorieCount, Macronutrients, MealCategory, DateLogged } = req.body;
    const query = `
        INSERT INTO NutritionLog (UserID, MealName, CalorieCount, Macronutrients, MealCategory, DateLogged)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [UserID, MealName, CalorieCount, Macronutrients, MealCategory, DateLogged], (err) => {
        if (err) throw err;
        res.redirect('/nutrition');
    });
});

module.exports = router;
