import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: var(--color-secoundary);
  height: 34px;
  margin-top: 33px;
`

const Footer = () => (
  <StyledFooter>
    <a href="https://www.sulimantwfiq.com">Made by Suliman twfiq</a>
  </StyledFooter>
)

export default Footer
