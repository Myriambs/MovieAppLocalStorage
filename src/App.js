import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Form from "./components/Form";
import "./App.css";

const KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

function App() {
  const [movieData, setMovieData] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [counter, setCounter] = useState(0);

  // Load movies from localStorage or API on initial load
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movieData"));

    if (savedMovies && savedMovies.length > 0) {
      setMovieData(savedMovies); // Load saved movies from localStorage if they exist
    } else {
      fetchMovies(API_URL); // Fetch from API if localStorage is empty
    }

    setCounter(1); // Set counter to indicate that initial loading is complete
  }, []);


    
  // Save movies to   whenever movieData changes (after initial load)
  useEffect(() => {
    if (counter === 0) return; // Skip saving on initial load
    localStorage.setItem("movieData", JSON.stringify(movieData));
  }, [movieData, counter]);




  // Fetch movies from the API
  const fetchMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovieData(data.results); // This will update movieData with API data
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Handle search functionality
  useEffect(() => {
    if (nameSearch.trim()) {
      fetchMovies(`${SEARCH_API}${nameSearch}`);
    } else if (!localStorage.getItem("movieData")) {
      fetchMovies(API_URL);
    }
  }, [nameSearch]);

  const addMovie = (newMovie) => {
    setMovieData([...movieData, newMovie]);
  };

  return (
    <>
      <Header setNameSearch={setNameSearch} />
      <MovieList movieData={movieData} nameSearch={nameSearch} />
      <Form addMovie={addMovie} />
    </>
  );
}

export default App;
