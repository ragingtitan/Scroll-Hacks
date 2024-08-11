import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_datasets as tfds

# Load pre-trained Wav2Vec2 model from TensorFlow Hub
model_url = "https://kaggle.com/models/kaggle/wav2vec2/frameworks/TensorFlow2/variations/wav2vec2/versions/1"
pretrained_layer = hub.KerasLayer(model_url, trainable=True)

# Define VOCAB_SIZE based on the number of classes in your dataset
VOCAB_SIZE = 12  # Update this according to your dataset

# Build the model using TensorFlow's Functional API
inputs = tf.keras.Input(shape=(246000,))  # Input shape (adjust if necessary)
hidden_states = pretrained_layer(inputs)
outputs = tf.keras.layers.Dense(VOCAB_SIZE, activation='softmax')(hidden_states)
model = tf.keras.Model(inputs=inputs, outputs=outputs)

# Compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Load and preprocess the dataset
def preprocess_audio(audio, label):
    audio = tf.audio.decode_wav(audio)[0]
    audio = tf.squeeze(audio, axis=-1)
    audio = tf.image.resize_with_crop_or_pad(audio, target_height=246000)
    return audio, label

# Load the dataset
dataset, info = tfds.load('speech_commands', with_info=True, as_supervised=True, shuffle_files=True)
train_data, test_data = dataset['train'], dataset['test']

# Preprocess the dataset
train_data = train_data.map(preprocess_audio).shuffle(1000).batch(32).prefetch(tf.data.experimental.AUTOTUNE)
test_data = test_data.map(preprocess_audio).batch(32).prefetch(tf.data.experimental.AUTOTUNE)

# Train the model
history = model.fit(train_data, epochs=10, validation_data=test_data)

# Evaluate the model
loss, accuracy = model.evaluate(test_data)
print(f"Test Loss: {loss}, Test Accuracy: {accuracy}")

# Save the model
model.save('path/to/saved_model')

# Optional: Convert to TensorFlow Lite format for deployment
converter = tf.lite.TFLiteConverter.from_saved_model('path/to/saved_model')
tflite_model = converter.convert()
with open('model.tflite', 'wb') as f:
    f.write(tflite_model)
