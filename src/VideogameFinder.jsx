import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import "./styles.css";

export const VideogameFinder = () => {
  const [query, setQuery] = useState("");

  const [game, setGame] = useState(null);

  const [notFound, setnotFound] = useState(false);

  const [spinner, setSpinner] = useState(false);

  const BaseURL = "https://api.rawg.io/api/games?";
  const API_KEY = import.meta.env.VITE_API_KEY

  const handleSentForm = (e) => {
    e.preventDefault();
  };

  const handleSearchBar = (e) => {
    const aux = e.target.value.toLowerCase();
    setQuery(aux);
  };

  const fetchVideogames = async () => {
    if (query.trim().length === 0) {
      return;
    }
    try {
      setSpinner(true);
      const answer = await fetch(`${BaseURL}key=${API_KEY}&search=${query}`);
      const data = await answer.json();
      if (data.results.length === 0) {
        setGame(null);
        setnotFound(true);
      } else {
        setGame(data.results[0]);
        setnotFound(false);
      }
      setQuery("");
    } catch {
      console.error("error");
    } finally {
      setSpinner(false);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="title">
          <h1>Videogame Finder</h1>
        </div>
        <form onSubmit={handleSentForm}>
          <input
            className="search-bar"
            type="text"
            placeholder="Type any videogame title!"
            value={query}
            onChange={handleSearchBar}
          />
          <button className="search-button" onClick={fetchVideogames}>
            Search
          </button>
        </form>
      </div>
      {spinner ? (
        <div className="spinner-container">
          <PacmanLoader color="yellow" size={15} />
        </div>
      ) : (
        <>
          <div className="game-container">
            {game && (
              <div className="game-card">
                <div className="image-container">
                  <img src={game.background_image} />
                </div>
                <h2>{game.name}</h2>
                <ul>
                  <li>📅 Released: {game.released}</li>
                  <li>⭐ Rating: {game.rating}</li>
                  <li>
                    🏆 Metacritic:{" "}
                    {game.metacritic === null ? "N/A" : game.metacritic}
                  </li>

                  <li>
                    <strong>🎮 Supported platforms:</strong>
                    <ul>
                      {game.platforms.map((item) => (
                        <li key={item.platform.id}>{item.platform.name}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="error-container">
            {notFound && <h2 className="error-message">Game not found!</h2>}
          </div>
        </>
      )}
      <footer>
        <p>
          Made by Diego Uribe | <a href="https://github.com/D-Uribe">GitHub</a>
        </p>
      </footer>
    </>
  );
};
