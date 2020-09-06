import tensorflow
from tensorflow import keras
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Dataset can be generated from both the tags generated in the app by users and preexisting datasets
x_train = pd.read_csv('./train')
x_test = pd.read_csv('./test')
y_train = x_train.pop(['cuisine'])

class_names = ['Western', 'Mexican', 'Indian', 'Chinese',
               'Japanese', 'European', 'Mediteranien', 'African']


# Use predefined dictionaries to convert the data of xtrian and xtest into numbers for the neural net

model = keras.Sequential(
    keras.layers.Dense(len(x_train)),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(len(class_names), activation='softmax')
)

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy', metrics=['accuracy'])

model.fit(x_train, y_train, epochs=1)

prediction = model.predict(x_test)
