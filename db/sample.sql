USE healthub-schema

-- Insert into User Table
INSERT INTO User (PersonID, Email, Password, Gender, Height, Weight, FitnessGoals)
VALUES
(1, 'john.doe@example.com', 'password123', 'Male', 180.5, 75.2, 'Weight Loss'),
(2, 'jane.doe@example.com', 'securePass456', 'Female', 165.3, 65.5, 'Muscle Gain');

-- Insert into Trainer Table
INSERT INTO Trainer (PersonID, Specialization, TrainerRating)
VALUES
(3, 'Strength Training', 4.8),
(4, 'Cardio Fitness', 4.5);

-- Insert into ActivityLog Table
INSERT INTO ActivityLog (UserID, ActivityType, CaloriesBurned, DateOfActivity, DistanceTraveled, Duration)
VALUES
(1, 'Running', 500, '2024-12-01', 5.0, 30.0),
(2, 'Cycling', 400, '2024-12-02', 10.0, 45.0);

-- Insert into NutritionLog Table
INSERT INTO NutritionLog (UserID, MealName, CalorieCount, Macronutrients, MealCategory, DateLogged)
VALUES
(1, 'Grilled Chicken Salad', 350, 'Protein: 40g, Carbs: 10g, Fat: 8g', 'Lunch', '2024-12-01'),
(2, 'Protein Shake', 250, 'Protein: 30g, Carbs: 10g, Fat: 5g', 'Snack', '2024-12-02');

-- Insert into HealthMetrics Table
INSERT INTO HealthMetrics (UserID, BMI, HeartRate, SleepQuality, BodyFat, CaloriesBurnedPerDay)
VALUES
(1, 24.2, 70, 'Good', 18.5, 2500),
(2, 22.0, 65, 'Average', 20.0, 2200);

-- Insert into VirtualSession Table
INSERT INTO VirtualSession (TrainerID, ClientID, Duration, DateOfSession, SessionSummary, Feedback)
VALUES
(1, 1, 60, '2024-12-01', 'Strength training session focused on legs', 'Excellent progress'),
(2, 2, 45, '2024-12-02', 'Cardio endurance session with cycling focus', 'Good energy');

-- Insert into WorkoutPlans Table
INSERT INTO WorkoutPlans (ClientID, TrainerID, WorkoutPlan, Frequency)
VALUES
(1, 1, 'Day 1: Squats, Deadlifts\nDay 2: Bench Press, Pull-ups', '3 days/week'),
(2, 2, 'Day 1: Running, Cycling\nDay 2: Jump Rope, Sprints', '4 days/week');

-- Insert into ClientProfile Table
INSERT INTO ClientProfile (TrainerID, ProgressReports, WorkoutPlans, Goals, NutritionalPlans, VirtualSessionHistory)
VALUES
(1, 'Progress improved by 10%', 'Strength and endurance plan', 'Weight Loss', 'High protein diet', 'Completed 5 sessions'),
(2, 'Cardio endurance increased by 20%', 'Cardio-focused plan', 'Muscle Gain', 'Balanced diet', 'Completed 4 sessions');
