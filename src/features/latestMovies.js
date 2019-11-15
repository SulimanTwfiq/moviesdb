import React from "react";
import useSWR from "swr";
import Movies from "../MoviesCard";

const LatestMovies = () => {
  let LatestMoviesApiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const { data, error } = useSWR(LatestMoviesApiUrl);
  return (
    <Movies
      title="Latest movies"
      isLoading={!data}
      MoviesList={data && data.results}
      isError={error}
    />
  );
};

export default LatestMovies;
