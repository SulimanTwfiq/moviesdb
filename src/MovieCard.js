import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Movie = ({
  id,
  title,
  overview,
  genre_ids,
  poster_path,
  genres,
  release_date
}) => {
  let MovieGenres = null;
  if (genres && genre_ids.length > 0) {
    MovieGenres = genres.filter(genre =>
      genre_ids.find(item => item === genre.id)
    );
  }
  return (
    <Link to={`/${id}`}>
      <MovieCard>
        <h3> {title}</h3>
        {MovieGenres && (
          <Genres>
            {MovieGenres.map(({ name }) => (
              <span key={name}> {name}</span>
            ))}
          </Genres>
        )}
        <p>
          {overview && overview.length > 120
            ? overview.substring(0, 120 - 3) + "..."
            : overview}
        </p>
        <span>{release_date}</span>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
          />
        )}
      </MovieCard>
    </Link>
  );
};

export const MovieCard = styled.li`
  display: grid;
  align-content: end;
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background-color: #d9eace;
  padding: 10px;
  height: 350px;
  color: black;

  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  & > :not(img) {
    z-index: 1000;
    position: relative;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transition: all 0.4s;
  }

  h3 {
    font-size: 1.3rem;
    text-shadow: 1px 1px 22px black;
    font-weight: bold;
    margin: 7px;
    color: white;

    &:visited,
    &:link {
      color: white;
    }
  }
  p {
    font-size: 0.7rem;
    font-weight: bold;
  }
  span {
    font-size: 0.7rem;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0,
      #fff 100%
    );
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;
export const Genres = styled.div`
  & > span {
    color: #3c7b70;
    font-weight: bold;
    font-size: 0.7rem;
    line-height: 2.2;
    margin: 6px;
    border-radius: 5px;
    padding: 2px;
    background-color: #d0d0d0;
    box-shadow: 0px 2px;
  }
`;
export default Movie;
