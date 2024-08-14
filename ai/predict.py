import joblib
import numpy as np

# Load the trained model
model = joblib.load('learning_model.pkl')

# Example input
student_scores = np.array([[80, 85, 70]])

# Predict the next module
next_module = model.predict(student_scores)
print(f"Next suggested module: {next_module[0]}")
