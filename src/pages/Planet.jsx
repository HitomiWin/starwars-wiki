import React from "react";
import { Link } from "react-router-dom";
import { Table, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {  getFetchedData } from "../services/SWAPI";
import { getIdFromUrl } from "../helpers/getId";

const Planet = () => {
  let { id } = useParams();
  // eslint-disable-next-line
  const { data, error, isError, isFetching, isLoading, isPreviosData } =
    useQuery(["planets", id], () => getFetchedData("planets", id));

if(data) console.log(data)
  return (
    <div>
      {isLoading && <p className="my-3">Loading planet...</p>}

      {isError && (
        <p className="my-3">
          Sorry, tried to get planet but API wasn't funny ({error})
        </p>
      )}

      {data && (
        <Card>
          <Card.Header as="h5">{data.results.name}</Card.Header>
          <Card.Body>
            <Table striped bordered hover variant="dark">
              <tbody>
                <tr>
                  <td>Rotation Period</td>
                  <td>{data.results.rotation_period} years</td>
                </tr>
                <tr>
                  <td>Orbital Period</td>
                  <td>{data.results.orbital_period}years</td>
                </tr>
                <tr>
                  <td>Diameter</td>
                  <td>{data.results.diameter} m</td>
                </tr>
                <tr>
                  <td>Climate</td>
                  <td>{data.results.climate}</td>
                </tr>
                <tr>
                  <td>Terrain</td>
                  <td>{data.results.terrain}</td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>{data.results.population}</td>
                </tr>
                <tr>
                  <td>People</td>
                  <td>
                    {data.results.residents.map((url) => {
                      const id = getIdFromUrl(url);
                      return (
                        <li key={id}>
                          <Link to={`/people/${id}`}>
                            People {id} &raquo;
                          </Link>
                        </li>
                      );
                    })}
                  </td>                 
                </tr>
                <tr>
                  <td>Filmes</td>
                  <td>
                    {data.results.films.map((url) => {
                      const id = getIdFromUrl(url);
                      return (
                        <li key={id}>
                          <Link to={`/films/${id}`}>
                            Film {id} &raquo;
                          </Link>
                        </li>
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Planet;
