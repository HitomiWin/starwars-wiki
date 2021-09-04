import React from 'react'
import {getPeople} from '../services/SWAPI'
import { useQuery } from 'react-query'
import { Container,Row } from 'react-bootstrap'
// import {useParams} from 'react-router-dom'
import PeopleCard from "../components/PeopleCard"


const People = () => {
  const {data, error ,isError, isFetching, isLoading} = useQuery('people',()=>getPeople('people'))
  console.log(data)

  return (
<Container>
  <h1>People</h1>
  <div className="text-center my-5">
				{isLoading && (<p className="my-3">Loading people...</p>)}

				{isError && (<p className="my-3">Sorry, tried to get joke but API wasn't funny ({error})</p>)}

				{!isFetching && data && (
					<Row className="justify-content-md-center">
					{data.results.map((people,i)=><PeopleCard key={i} people={people}/>)}
					</Row>
				)}
			</div>

</Container>
  )
}

export default People