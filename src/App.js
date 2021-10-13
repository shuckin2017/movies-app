import React, { useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import Layuot from "./components/Ui/Layout";
import "./style.scss";

export default function App() {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://yts.mx/api/v2/list_movies.json`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos.data.movies });
      });
  }, [setAppState]);

  return (
    <Layuot>
      <MoviesList repos={appState.repos} isLoading={appState.loading} />
    </Layuot>
  );
}
