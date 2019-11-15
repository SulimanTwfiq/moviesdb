import React from "react";
import SimilarMovies from "../features/similarMovies";
import useSWR from "swr";
import { Genres } from "../MovieCard";
import styled from "styled-components";
import imdb from "../images/imdb.png";
import { useParams } from "react-router-dom";
export const Movie = () => {
  const { movieId } = useParams();
  let movieDetailUrl = `
  https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const { data, error: isError } = useSWR(movieDetailUrl);
  const {
    imdb_id,
    title,
    poster_path,
    overview,
    release_date,
    genres,
    runtime
  } = data ? data : {};
  // useEffect(() => void refetchData(null, movieDetailUrl), [movieDetailUrl])

  return (
    <>
      {isError ? (
        <p>Something went wrong ...</p>
      ) : !data ? (
        <p>Loading ...</p>
      ) : data ? (
        <>
          <MovieDetails poster_path={poster_path}>
            <div>
              {poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={title}
                />
              )}
            </div>
            <div>
              <h2>{title} </h2>
              <Genres>
                {genres &&
                  genres.map(({ name }) => <span key={name}> {name}</span>)}
              </Genres>
              <TimeDate>
                <span>{runtime} minute </span>
                <span>release date {release_date}</span>
              </TimeDate>
              <p>{overview}</p>
              <a href={"https://www.imdb.com/title/" + imdb_id}>
                <img src={imdb} alt="imdb" />
              </a>
            </div>
          </MovieDetails>
          <SimilarMovies movieId={movieId} />
        </>
      ) : (
        <p>Movie is not found !</p>
      )}
    </>
  );
};
const MovieDetails = styled.div`
  display: grid;
  padding: 7px;
  grid-template-columns: ${props =>
    props.poster_path ? "repeat(auto-fit, minmax(300px, 1fr))" : "1fr"};
  align-items: center;
  margin-top: 20px;
  img {
    display: block;
    margin: 10px auto;
    box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  }
`;
const TimeDate = styled.div`
  margin: 15px;
  color: #3c7b70;
  font-size: 1rem;
  > span {
    display: block;
  }
`;

export default Movie;
