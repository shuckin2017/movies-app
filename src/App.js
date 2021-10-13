import React, { useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import Layuot from "./components/Ui/Layout";
import "./style.scss";

export default function App() {
  const [appState, setAppState] = useState({
    loading: false,
    repos: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  console.log(fetching);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      setAppState({ loading: true });
      const apiUrl = `https://yts.mx/api/v2/list_movies.json?page=${currentPage}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
          setAppState({
            loading: false,
            repos: [...appState.repos, ...repos.data.movies],
          });
          setFetching(false);
          console.log(appState.repos);
          setCurrentPage((prevSatate) => prevSatate + 1);
        });
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <Layuot>
      <MoviesList repos={appState.repos} isLoading={appState.loading} />
    </Layuot>
  );
}
