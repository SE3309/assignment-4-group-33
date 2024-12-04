const express = require('express');
const router = express.Router();

// View all sessions
router.get('/', (req, res) => {
    const query = `
        SELECT VirtualSession.*, Trainer.Name AS TrainerName, ClientProfile.Goals AS ClientGoals
        FROM VirtualSession
        JOIN Trainer ON VirtualSession.TrainerID = Trainer.TrainerID
        JOIN ClientProfile ON VirtualSession.ClientID = ClientProfile.ClientID
    `;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.render('sessions', { title: 'Virtual Sessions', sessions: result });
    });
});

// Book a session
router.post('/book', (req, res) => {
    const { SessionID, TrainerID, ClientID, Duration, DateOfSession } = req.body;
    const query = `
        INSERT INTO VirtualSession (SessionID, TrainerID, ClientID, Duration, DateOfSession)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(query, [SessionID, TrainerID, ClientID, Duration, DateOfSession], (err) => {
        if (err) throw err;
        res.redirect('/sessions');
    });
});

module.exports = router;
