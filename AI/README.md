# Künstliche Intelligenz und Machine Learning

## Übersicht
Eine umfassende Darstellung verschiedener KI-Technologien, ihrer Anwendungen und Implementierungen.

> **Wichtiger Hinweis zur Abdeckung der Themen**: 
> Im Rahmen der Masterklasse wurden schwerpunktmäßig folgende Kernthemen behandelt:
> - Large Language Models (LLM) und deren Anwendung
> - Bildklassifizierung mit Machine Learning
>
> Die weiteren hier dokumentierten Themen (wie Computer Vision, Reinforcement Learning, etc.) wurden zur Vollständigkeit hinzugefügt und dienen als Orientierung für weiterführende Arbeiten.

## 1. Kernthemen der Masterklasse

### Large Language Models (LLM)
- **Praktische Anwendung**
  - Prompt Engineering
  - API Integration
  - Kontext-Management
  - Response-Verarbeitung

### Bildklassifizierung
- **Grundlagen**
  - Neuronale Netze
  - Trainingsmodelle
  - Datenvorbereitung
  - Modell-Evaluation

## 2. Ergänzende Themen zur Vollständigkeit

### Natural Language Processing (NLP)
> **Hinweis**: Über LLMs hinausgehende NLP-Konzepte wurden nicht im Detail behandelt.

### Grundlegende Konzepte
- **Tokenization**
  - Wort-Tokenization
  - Subword-Tokenization (BPE, WordPiece)
  - Sentence-Tokenization

- **Embedding**
  - Word2Vec
  - GloVe
  - FastText
  - Kontextuelle Embeddings (BERT, GPT)

### Anwendungen
- **Text Klassifikation**
  - Sentiment Analyse
  - Spam Erkennung
  - Themen-Kategorisierung
  - Intent Recognition

- **Named Entity Recognition (NER)**
  - Personen, Organisationen, Orte
  - Datumsangaben
  - Währungen
  - Custom Entities

- **Maschinelle Übersetzung**
  - Neuronale Übersetzung
  - Sequence-to-Sequence Modelle
  - Attention Mechanismen
  - Transfer Learning

### Implementierungsbeispiel (Python)
```python
from transformers import pipeline

# Sentiment Analyse
classifier = pipeline("sentiment-analysis")
result = classifier("Der Service war ausgezeichnet!")
print(result)  # [{'label': 'POSITIVE', 'score': 0.998}]

# NER
ner = pipeline("ner")
text = "Angela Merkel besuchte Berlin."
entities = ner(text)
print(entities)
```

### Erweiterte Computer Vision
> **Hinweis**: Über Bildklassifizierung hinausgehende Konzepte wurden nicht im Detail behandelt.

### Computer Vision
### Technologien
- **Bildklassifikation**
  - CNN Architekturen
  - Transfer Learning
  - Feature Extraction
  - Fine-Tuning

- **Objekterkennung**
  - YOLO
  - R-CNN Familie
  - SSD
  - RetinaNet

- **Segmentierung**
  - Semantische Segmentierung
  - Instance Segmentierung
  - Panoptische Segmentierung

### Implementierungsbeispiel (Python)
```python
import tensorflow as tf
from tensorflow.keras.applications import ResNet50

# Vortrainiertes Modell laden
model = ResNet50(weights='imagenet')

# Bild vorverarbeiten
image = tf.keras.preprocessing.image.load_img(
    'bild.jpg', target_size=(224, 224)
)
input_arr = tf.keras.preprocessing.image.img_to_array(image)
input_arr = tf.keras.applications.resnet50.preprocess_input(input_arr)

# Vorhersage
predictions = model.predict(input_arr)
```

### Generative KI
> **Hinweis**: Diese Konzepte wurden nicht im Detail behandelt und dienen der Vollständigkeit.

### Modelle und Architekturen
- **Transformer**
  - Encoder-Decoder
  - Self-Attention
  - Multi-Head Attention
  - Position Encoding

- **Large Language Models (LLM)**
  - GPT Familie
  - BERT Familie
  - LLaMA
  - Claude

- **Diffusion Models**
  - Stable Diffusion
  - DALL-E
  - Midjourney
  - Imagen

### Anwendungsfälle
- **Text Generation**
  - Content Creation
  - Code Generation
  - Chatbots
  - Zusammenfassungen

- **Bild Generation**
  - Text-to-Image
  - Image-to-Image
  - Inpainting
  - Style Transfer

### Implementierungsbeispiel (Python)
```python
from transformers import pipeline

# Text Generation
generator = pipeline('text-generation')
prompt = "Künstliche Intelligenz wird"
result = generator(prompt, max_length=50)
print(result[0]['generated_text'])

# Image Generation
from diffusers import StableDiffusionPipeline
pipe = StableDiffusionPipeline.from_pretrained("stable-diffusion-v1-5")
image = pipe("Ein sonniger Tag in Berlin").images[0]
image.save("generated_image.png")
```

### Reinforcement Learning
> **Hinweis**: Diese Konzepte wurden nicht im Detail behandelt und dienen der Vollständigkeit.

### Grundkonzepte
- **Komponenten**
  - Agent
  - Environment
  - State
  - Action
  - Reward

- **Algorithmen**
  - Q-Learning
  - Deep Q-Network (DQN)
  - Policy Gradient
  - Proximal Policy Optimization (PPO)

### Anwendungen
- **Robotik**
  - Bewegungssteuerung
  - Navigation
  - Manipulation

- **Spiele**
  - Schach
  - Go
  - Videospiele

### Implementierungsbeispiel (Python)
```python
import gym
from stable_baselines3 import PPO

# Environment erstellen
env = gym.make("CartPole-v1")

# Modell trainieren
model = PPO("MlpPolicy", env, verbose=1)
model.learn(total_timesteps=10000)

# Modell testen
obs = env.reset()
for _ in range(1000):
    action, _states = model.predict(obs)
    obs, rewards, dones, info = env.step(action)
    env.render()
```

## Best Practices
### Fokus auf Kernthemen
- LLM Integration
  - API-Sicherheit
  - Kostenmanagement
  - Fehlerbehandlung
  - Response-Validierung

- Bildklassifizierung
  - Datenaufbereitung
  - Modellauswahl
  - Validierungsstrategien
  - Deployment

### Entwicklung
- Datenqualität sicherstellen
- Modell-Validierung
- Kontinuierliches Monitoring
- A/B Testing

### Deployment
- Model Versioning
- Skalierbare Infrastruktur
- Monitoring und Logging
- Fallback-Strategien

### Sicherheit
- Modell-Sicherheit
- Adversarial Attacks Prevention
- Datenverschlüsselung
- Access Control

## Tools und Frameworks
### Deep Learning
- TensorFlow
- PyTorch
- JAX
- Keras

### NLP
- Hugging Face Transformers
- spaCy
- NLTK
- Stanford NLP

### Computer Vision
- OpenCV
- TorchVision
- TensorFlow Vision
- MMDetection

## Ressourcen
### Kernthemen
- OpenAI API Dokumentation
- TensorFlow Bildklassifizierung Tutorial
- Kursunterlagen der Masterklasse

### Weiterführende Ressourcen
> Diese Ressourcen dienen der weiteren Vertiefung über den Kursinhalt hinaus:
- [Hugging Face Documentation](https://huggingface.co/docs)
- [TensorFlow Extended Documentation](https://www.tensorflow.org/tfx)
- [PyTorch Documentation](https://pytorch.org/docs/stable/index.html)
- [Papers With Code](https://paperswithcode.com/) 
