import React, { useState } from "react";
import { getData } from "../services/SWAPI";
import { useQuery } from "react-query";
import { Container, Row } from "react-bootstrap";
// import {useParams} from 'react-router-dom'
import PeopleCard from "../components/PeopleCard";
import Pagenation from "../components/Pagenation";


const People = () => {
  const [page, setPage] = useState(1);
  const { data, error, isError, isFetching, isLoading, isPreviosData } =
    useQuery(["people", page], () => getData("people", page), {
      keepPreviousData: true,
    });

  return (
    <Container  >
      <h1>People</h1>
      <div className="text-center my-5">
        {isLoading && <p className="my-3">Loading people...</p>}

        {isError && (
          <p className="my-3">
            Sorry, tried to get people but API wasn't funny ({error})
          </p>
        )}

        {!isFetching && data && (
          <Row className="justify-content-md-center">
            {data.results.map((people, i) => (
              <PeopleCard key={i} people={people} />
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

export default People;
