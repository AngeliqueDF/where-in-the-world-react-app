import React from "react";
import helpers from "./../utils/helpers";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CountryInfoRow from "./layout/CountryInfoRow/CountryInfoRow";

import styled from "styled-components";

const StyledCountryCard = styled.li`
  width: 18rem;
  margin-block-end: 3rem;
  img {
    height: 10rem;
    box-shadow: var(--light-shadow);
    border-radius: 7px 7px 0 0;
  }
  .card {
    border-radius: 7px;
    border: none;
    background-color: var(--elements);
  }
  .card-title {
    padding: 1rem 1rem 1rem 1.5rem;
    font-size: 1.1rem;
    margin: 1rem 0 0;
    font-weight: bold;
  }

  .card-body {
    padding: 0 1.5rem 1.2rem;
    li {
      margin: 0.1rem 0;
    }
  }
  @media screen and (min-width: 768px) {
    margin: 0 2.2rem 4rem 0;
  }
  @media screen and (min-width: 1440px) {
    margin: unset;
    margin-block-end: 4rem;
  }
`;

const CountryCard = ({ country }) => {
  const countryCardInfo = [
    { term: "Population", value: helpers.formatNumber(country.population) },
    { term: "Region", value: country.region },
    { term: "Capital", value: country.capital },
  ];
  return (
    <StyledCountryCard className="country-card">
      <Link to={`countries/${country.cca3}`}>
        <Card as="article">
          <Card.Img
            variant="top"
            src={country.flags.png}
            fluid="true"
            alt={`Flag of ${country.name.common}`}
            preserveAspectRatio="none"
          />
          <Card.Title as="h2">{country.name.common}</Card.Title>
          <Card.Body>
            <dl>
              {countryCardInfo.map((info) => (
                <CountryInfoRow
                  key={info.term + info.value}
                  term={info.term}
                  values={info.value}
                />
              ))}
            </dl>
          </Card.Body>
        </Card>
      </Link>
    </StyledCountryCard>
  );
};

export default CountryCard;
