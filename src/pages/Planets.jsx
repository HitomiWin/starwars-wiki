import React, { useState } from "react";
import { getData } from "../services/SWAPI";
import { useQuery } from "react-query";
import { Container, Row } from "react-bootstrap";
// import {useParams} from 'react-router-dom'
import PlanetsCard from "../components/PlanetsCard";
import Pagenation from "../components/Pagenation";


const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, error, isError, isFetching, isLoading, isPreviosData } =
    useQuery(["planets", page], () => getData("planets", page), {
      keepPreviousData: true,
    });

  return (
    <Container>
      <h1>Planets</h1>
      <div className="text-center my-5">
        {isLoading && <p className="my-3">Loading planets...</p>}

        {isError && (
          <p className="my-3">
            Sorry, tried to get planets but API wasn't funny ({error})
          </p>
        )}

        {!isFetching && data && (
          <Row className="justify-content-md-center">
            {data.results.map((planets, i) => (
              <PlanetsCard key={i} planets={planets} />
            ))}
          </Row>
        )}
        {!isFetching && data && (
          <Pagenation
            data={data}
            isPreviousData={isPreviosData}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </Container>
  );
};

export default Planets;

