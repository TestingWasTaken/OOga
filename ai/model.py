import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Sample data: student scores and module completions
X = np.array([[85, 90, 78], [70, 65, 80], [90, 88, 94], [60, 55, 65]])
y = np.array(["Module 2", "Module 1", "Module 3", "Module 1"])

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'learning_model.pkl')
