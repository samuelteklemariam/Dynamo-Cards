# Gemini Dynamo

Gemini Dynamo is a web application that generates flashcards from YouTube video transcripts. It leverages the power of language models to extract key 
concepts and definitions from the content of YouTube videos, presenting them in an easy-to-use flashcard format for efficient learning.

### Table of Contents
- Features
- Getting Started
- Prerequisites
- Installation
- Usage
- Contributing

### Features

- Extract key concepts from YouTube video transcripts.
- Automatically generate flashcards from extracted concepts.
-Simple and intuitive user interface.

### Getting Started

#### Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.8+
- Node.js 14+
- npm 6+

#### Installation

##### 1. Clone the repository
- git clone https://github.com/yourusername/gemini-dynamo.git
cd gemini-dynamo

##### 2. Backend Setup
- Navigate to the backend directory:
-- cd backend
- Create a virtual environment:
-- python -m venv env
-  Activate the virtual environment:
-  On Windows:
-- .\env\Scripts\activate
- On macOS/Linux:
-- source env/bin/activate
- Install the required packages:
-- pip install -r requirements.txt
- Start the backend server:
-- uvicorn main:app --reload

##### 3. Frontend Setup

- Navigate to the frontend directory:
-- cd ../frontend
- Install the required packages:
-- npm install
- Start the frontend development server:
-- npm start

#### Usage

- 1. Open your browser and navigate to http://localhost:3000.
- 2. Enter a YouTube video link in the input field.
- 3. Click on "Generate Flashcards".
- 4. Review the generated flashcards, which will appear on the page.

##### Contributing

##### Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch:
-- git checkout -b feature-branch
- Make your changes and commit them:
-- git commit -m 'Add some feature'
- Push to the branch:
-- git push origin feature-branch
- Open a pull request.
Please make sure to update tests as appropriate.

##### Demo
https://www.loom.com/share/eedb2a5ebf9e4ff8b6bc20c49e5582c2?sid=02cd8420-377c-45d8-8211-d5ab5064159f


