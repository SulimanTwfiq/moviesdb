import React from "react";
import Movies from "../MoviesCard";
import useSWR from "swr";

const SimilarMovies = ({ movieId }) => {
  let SimilarMoviesUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  const { data, error } = useSWR(SimilarMoviesUrl);
  return (
    <Movies
      title="Similar movies"
      isLoading={!data}
      MoviesList={data && data.results}
      isError={error}
      notFound="No similar movies found"
    />
  );
};

export default SimilarMovies;
