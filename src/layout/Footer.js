import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-secoundary);
  margin-top: 33px;
  .github {
    font-size: 0.7rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <a href="https://www.sulimantwfiq.com">Made by Suliman twfiq</a>
    <br />
    <a className="github" href="https://github.com/SulimanTwfiq/moviesdb">
      open source project github{" "}
    </a>
  </StyledFooter>
);

export default Footer;
