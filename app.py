import gradio as gr
import librosa
import numpy as np
import joblib

# Load model and encoder
model = joblib.load("medical_model.pkl")
encoder = joblib.load("sentiment_encoder.pkl")

# Audio feature extractor (MFCCs)
def extract_features(audio_path):
    y, sr = librosa.load(audio_path, sr=None)
    mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
    return np.mean(mfcc, axis=1).reshape(1, -1)

# Main prediction function
def predict(audio):
    if audio is None:
        return "No audio uploaded."
    features = extract_features(audio)
    prediction = model.predict(features)[0]
    label = encoder.inverse_transform([prediction])[0]
    return f"Prediction: {label}"

# Gradio interface
demo = gr.Interface(
    fn=predict,
    inputs=gr.Audio(type="filepath", label="Upload Audio"),
    outputs=gr.Textbox(label="Result"),
    title="AudioCare - Emergency & Sentiment Predictor",
    description="Upload a voice message and get predictions for emergency and sentiment."
)

# Launch interface
demo.launch()
