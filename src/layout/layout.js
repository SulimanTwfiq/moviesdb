import React from "react";
import styled from "styled-components";
import Header from "./header/Header";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import { Normalize } from "styled-normalize";

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-primary);
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Normalize />

    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  </>
);
export default Layout;
