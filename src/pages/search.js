import React from "react";
import Movies from "../MoviesCard";
import useSWR from "swr";
import { useParams } from "react-router-dom";

export const Search = () => {
  const { movieId } = useParams();
  let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movieId}&page=1&include_adult=false`;
  const { data, error } = useSWR(searchUrl);
  return (
    <Movies
      title={`search result for :  ${movieId}`}
      isLoading={!data}
      MoviesList={data && data.results}
      isError={error}
    />
  );
};

export default Search;
