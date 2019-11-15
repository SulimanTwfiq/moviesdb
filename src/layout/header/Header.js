import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Input, Button } from "./SearchInput";
import moviedb from "../../images/tmdb-logo.png";
import search from "../../images/search.svg";
const StyledHeader = styled.header`
  grid-area: header;
  background-color: var(--color-secoundary);
`;
const Logo = styled.img`
  margin: 20px;
  width: 100px;
`;
const Header = () => {
  let history = useHistory();
  const [userSearch, setUserSearch] = useState("");
  const SubmitSearch = e => {
    e.preventDefault();
    if (!userSearch) return;
    history.push({
      pathname: `/search/${userSearch}`,
      state: { userSearch }
    });
  };
  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={moviedb} alt="moviedb" />
      </Link>
      <form onSubmit={e => SubmitSearch(e)}>
        <label>
          <Input
            type="text"
            placeholder="search for a movie ..."
            value={userSearch}
            onChange={event => setUserSearch(event.target.value)}
          />
        </label>

        <Button type="submit">
          <img src={search} alt="search" aria-label="search" />
        </Button>
      </form>
    </StyledHeader>
  );
};

export default Header;
