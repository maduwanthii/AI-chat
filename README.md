# 🧠 AI Chatbot Assistant

A full-stack AI chatbot built using **React** and **Node.js/Express**, powered by the **Gemini API**. This chatbot allows users to send prompts and receive real-time AI-generated responses in a clean, chat-like interface.

---

## 📌 Project Overview

This project was developed as part of the **Associate Software Engineer Interview Assignment** for WIS (June 2025). The goal was to create a working chatbot interface where users can interact with an AI model through a modern frontend and backend integration.

---

## 🚀 Technologies Used

- **Frontend**: React, Vanilla CSS
- **Backend**: Node.js, Express
- **AI API**: Google Gemini (preferred), or OpenAI (optional fallback)

---

## 🗂️ Folder Structure

AI-chatbot-assistant/
├── backend/
│ ├── index.js
│ ├── gemini.js
│ ├── .env.example
│ └── package.json
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── App.jsx
│ │ ├── Chat.jsx
│ │ ├── context/
│ │ │ └── context.jsx
│ │ ├── styles.css
│ │ └── main.jsx
│ └── package.json
├── README.md

Create a .env file based on the provided .env.example:
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000

```bash
git clone https://github.com/maduwanthii/AI-chat.git
cd AI-chat

2. Backend Setup
   cd backend
   npm install
   node index.js

3. Frontend Setup
   cd frontend
   npm install
   npm run dev
