import React from "react";
import { Link } from "react-router-dom";
import darkModeIcon from "./../../images/icon-dark-mode.svg";
import lightModeIcon from "./../../images/icon-light-mode.svg";

import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--elements);
  margin-block-end: 1rem;
  padding: 1rem 1.6rem;
  box-shadow: var(--light-shadow);
  -webkit-box-shadow: var(--light-shadow);
  -moz-box-shadow: var(--light-shadow);

  h1 a {
    font-weight: 800;
  }

  .toggle-theme {
    color: var(--text);
    border: none;
    background-color: transparent;
    padding: 0;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 16px 16px;
    padding-inline-start: 1.5rem;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 1440px) {
    & {
      margin-block-end: 3rem;
      padding: 1rem 4.5rem;
    }
  }
`;

const Header = ({ toggleTheme, darkThemeEnabled }) => {
  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <StyledHeader>
      <h1>
        <Link to="/">Where in the world?</Link>
      </h1>

      <button
        data-testid="theme-toggler"
        style={{
          backgroundImage: `url(${
            darkThemeEnabled ? lightModeIcon : darkModeIcon
          })`,
        }}
        className="toggle-theme capitalize"
        onClick={handleToggleTheme}
      >
        {darkThemeEnabled === true ? "Light mode" : "Dark mode"}
      </button>
    </StyledHeader>
  );
};

export default Header;
