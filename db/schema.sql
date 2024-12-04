
USE healthHub-schema;

-- User Table
CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    PersonID INT NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Gender ENUM('Male', 'Female', 'Other'),
    Height FLOAT,
    Weight FLOAT,
    FitnessGoals VARCHAR(255)
);

-- Trainer Table
CREATE TABLE Trainer (
    TrainerID INT AUTO_INCREMENT PRIMARY KEY,
    PersonID INT NOT NULL,
    Specialization VARCHAR(255),
    TrainerRating FLOAT
);

-- ActivityLog Table
CREATE TABLE ActivityLog (
    LogID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    ActivityType VARCHAR(255),
    CaloriesBurned FLOAT,
    DateOfActivity DATE,
    DistanceTraveled FLOAT,
    Duration FLOAT,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- NutritionLog Table
CREATE TABLE NutritionLog (
    LogID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    MealName VARCHAR(255),
    CalorieCount FLOAT,
    Macronutrients VARCHAR(255),
    MealCategory VARCHAR(255),
    DateLogged DATE,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- HealthMetrics Table
CREATE TABLE HealthMetrics (
    HealthMetricID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    BMI FLOAT,
    HeartRate INT,
    SleepQuality VARCHAR(255),
    BodyFat FLOAT,
    CaloriesBurnedPerDay FLOAT,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- VirtualSession Table
CREATE TABLE VirtualSession (
    SessionID INT AUTO_INCREMENT PRIMARY KEY,
    TrainerID INT NOT NULL,
    ClientID INT NOT NULL,
    Duration FLOAT,
    DateOfSession DATE,
    SessionSummary TEXT,
    Feedback TEXT,
    FOREIGN KEY (TrainerID) REFERENCES Trainer(TrainerID)
);

-- WorkoutPlans Table
CREATE TABLE WorkoutPlans (
    WorkoutPlanID INT AUTO_INCREMENT PRIMARY KEY,
    ClientID INT NOT NULL,
    TrainerID INT NOT NULL,
    WorkoutPlan TEXT,
    Frequency VARCHAR(255),
    FOREIGN KEY (ClientID) REFERENCES User(UserID),
    FOREIGN KEY (TrainerID) REFERENCES Trainer(TrainerID)
);

-- ClientProfile Table
CREATE TABLE ClientProfile (
    ClientID INT AUTO_INCREMENT PRIMARY KEY,
    TrainerID INT NOT NULL,
    ProgressReports TEXT,
    WorkoutPlans TEXT,
    Goals TEXT,
    NutritionalPlans TEXT,
    VirtualSessionHistory TEXT,
    FOREIGN KEY (TrainerID) REFERENCES Trainer(TrainerID)
);
