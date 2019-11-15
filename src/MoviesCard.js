import React from "react";
import styled from "styled-components";
import Movie from "./MovieCard";
import useSWR from "swr";

const Movies = ({ title, isLoading, MoviesList, isError, notFound }) => {
  let getGenresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const { data } = useSWR(getGenresUrl);
  return (
    <MoviesSection>
      <SectionTitle> {title}</SectionTitle>
      {isError ? (
        <p>Something went wrong ...{isError} </p>
      ) : isLoading || MoviesList === undefined ? (
        <p>Loading ...</p>
      ) : MoviesList.length > 0 ? (
        <MoviesCard>
          {MoviesList.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              genres={data.genres}
              title={movie.title}
              overview={movie.overview}
              genre_ids={movie.genre_ids}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              movie={movie}
            />
          ))}
        </MoviesCard>
      ) : (
        <p>{notFound || "Nothing found"}</p>
      )}
    </MoviesSection>
  );
};

const SectionTitle = styled.h3`
  background-color: #daf1ce;
  padding: 10px;
  line-height: 1;
  margin: 0;
  margin-bottom: 43px;
`;
const MoviesSection = styled.div`
  /* grid-area: section; */
`;
export const MoviesCard = styled.ul`
  display: grid;
  margin: 10px;
  grid-gap: 19px;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  padding: 0;
  list-style: none;
`;
export default Movies;
