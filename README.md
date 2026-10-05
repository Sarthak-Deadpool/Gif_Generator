# 🎬 GIF Generator

A simple GIF Generator web application built with **React.js**, **Axios**, **Tailwind CSS**, and the **GIPHY API**.

The project also uses a **custom React hook** to separate API-related logic from the UI components and keep the code clean and reusable.

## 🚀 Features

- Generate random GIFs
- Search GIFs using custom tags
- Fetch GIFs using the GIPHY API
- API requests handled using Axios
- Custom React Hook for API logic
- React state management with `useState`
- API data fetching with `useEffect`
- Responsive UI using Tailwind CSS
- Environment variables for API configuration

## 🛠️ Tech Stack

- **React.js**
- **Vite**
- **JavaScript**
- **Axios**
- **Tailwind CSS**
- **GIPHY API**
- **React Custom Hooks**

## 📁 Project Structure

```text
gif-generator/
│
├── src/
│   ├── components/
│   │   ├── GIF.jsx
│   │   └── Tab.jsx
│   │
│   ├── hooks/
│   │   └── Api.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md