# Videogame Finder 🎮

A React app that lets you search any videogame using the RAWG API, featuring a retro arcade aesthetic, loading states, and error handling.

## Features

- 🔍 Search any videogame by title
- 🕹️ Retro arcade visual style with pixel font
- ⏳ Loading spinner while fetching data
- ❌ "Game not found" animation with red flash effect
- 📋 Shows release date, rating, Metacritic score and supported platforms
- 🚫 Empty search validation
- 📱 Responsive design

## Technologies

- React
- CSS3
- RAWG Video Games Database API
- react-spinners

## Project structure

```
├── src/
│   ├── components/
│   │   └── VideogameFinder.jsx   # Main component
│   ├── styles/
│   │   └── styles.css            # General styles
│   └── main.jsx                  # Entry point
├── assets/
│   └── background.jpg            # Background image
└── .env                          # API key (not included in repo)
```

## Getting Started

1. Clone the repository
2. Install dependencies
```bash
npm install
```
3. Create a `.env` file in the root of the project
```
VITE_API_KEY=your_api_key_here
```
4. Get your free API key at [rawg.io](https://rawg.io/apidocs)
5. Run the app
```bash
npm run dev
```

## API Key Setup

This app uses the [RAWG Video Games Database API](https://rawg.io/apidocs). If you're reusing this project:

1. Create a free account at rawg.io
2. Go to your profile and generate an API key
3. Create a `.env` file and add your key as shown above

## Webpage

[Live Demo]([https://your-deploy-url.netlify.app](https://transcendent-piroshki-b2f704.netlify.app))

## Preview

<img width="1869" height="933" alt="image" src="https://github.com/user-attachments/assets/e1b4717e-276f-4bbc-a151-32590699ede4" />


## Made by

Diego Uribe — [GitHub](https://github.com/D-Uribe)
