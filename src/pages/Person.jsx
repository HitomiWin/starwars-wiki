import React from "react";
import { Link } from "react-router-dom";
import { Table, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getFetchedData } from "../services/SWAPI";
import { getIdFromUrl } from "../helpers/getId";
import { useThemeContext } from "../contexts/ThemeContext";

const Person = () => {
  let { id } = useParams();
  const {theme} =useThemeContext()
  // eslint-disable-next-line
  const { data, error, isError, isFetching, isLoading, isPreviosData } =
    useQuery(["people", id], () => getFetchedData("people", id));


  return (
    <div>
      {isLoading && <p className="my-3">Loading people...</p>}

      {isError && (
        <p className="my-3">
          Sorry, tried to get joke but API wasn't funny ({error})
        </p>
      )}

      {data && (
        <Card>
          <Card.Header as="h5">{data.results.name}</Card.Header>
          <Card.Body>
            <Table striped bordered hover variant={theme}>
              <tbody>
                <tr>
                  <td>Eye color</td>
                  <td>{data.results.eye_color}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{data.results.height} cm</td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>{data.results.mass} kg</td>
                </tr>
                <tr>
                  <td>Skin Color</td>
                  <td>{data.results.skin_color}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{data.results.gender}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{data.results.gender}</td>
                </tr>
                <tr>
                  <td>Home World</td>
                  <td><Link to={`/planets/${getIdFromUrl(data.results.homeworld)}`} >Planet {getIdFromUrl(data.results.homeworld)} &raquo;</Link></td>
                  
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

export default Person;
