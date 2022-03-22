import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CountryCard = ({ country }) => {
	return (
		<li>
			<Link to={`countries/${country.cca3}`}>
				<Card as="article" style={{ width: "18rem" }}>
					{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
					<Card.Title as="h2">{country.name.common}</Card.Title>
					<Card.Body>
						<ListGroup>
							<ListGroup.Item>Population: {country.population}</ListGroup.Item>
							<ListGroup.Item>Region: {country.region}</ListGroup.Item>
							<ListGroup.Item>Capital: {country.capital}</ListGroup.Item>
						</ListGroup>
					</Card.Body>
				</Card>
			</Link>
		</li>
	);
};

export default CountryCard;