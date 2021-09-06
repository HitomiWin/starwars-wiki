import React from "react";
import { Link } from "react-router-dom";
import { Table, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getFetchedData } from "../services/SWAPI";
import { getIdFromUrl } from "../helpers/getId";
import { useThemeContext } from "../contexts/ThemeContext";

const Film = () => {
  let { id } = useParams();
  const {theme}=useThemeContext()
  // eslint-disable-next-line
  const { data, error, isError, isFetching, isLoading, isPreviosData } =
    useQuery(["films", id], () => getFetchedData("films", id));

  if (data) console.log(data);
  return (
    <div>
      {isLoading && <p className="my-3">Loading film...</p>}

      {isError && (
        <p className="my-3">
          Sorry, tried to get film but API wasn't funny ({error})
        </p>
      )}

      {data && (
        <Card>
          <Card.Header as="h5">{data.results.title}</Card.Header>
          <Card.Body>
            <Table striped bordered hover variant={theme}>
              <tbody>
                <tr>
                  <td>Director</td>
                  <td>{data.results.director}</td>
                </tr>
                <tr>
                  <td>Producer</td>
                  <td>{data.results.producer}</td>
                </tr>
                <tr>
                  <td>Director</td>
                  <td>{data.results.director} </td>
                </tr>
                <tr>
                  <td>Release Date</td>
                  <td>{data.results.release_date}</td>
                </tr>

                <tr>
                  <td>Characters</td>
                  <td>
                    {data.results.characters.map((url) => {
                      const id = getIdFromUrl(url);
                      return (
                        <li key={id}>
                          <Link to={`/people/${id}`}>
                            Chracter {id} &raquo;
                          </Link>
                        </li>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <td>Planets</td>
                  <td>
                    {data.results.planets.map((url) => {
                      const id = getIdFromUrl(url);
                      return (
                        <li key={id}>
                          <Link to={`/planet/${id}`}>Planet {id} &raquo;</Link>
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

export default Film;
