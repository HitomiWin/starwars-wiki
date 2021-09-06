import React from 'react'
import {useHistory} from 'react-router-dom'
import {Card, Button, Col} from 'react-bootstrap'
import { getIdFromUrl } from "../helpers/getId";

function PlanetsCard({planets}) {
  const history=useHistory()
  const id = getIdFromUrl(planets.url)


  return (
    <Col md="4" className="my-3">
    <Card>
    <Card.Header as="h5" variant="secondary">{planets.name}</Card.Header>
    <Card.Body>
      <Card.Text>
        Diameter: {planets.diameter}
      </Card.Text>
      <Card.Text>
        Climate: {planets.climate}
      </Card.Text>
      <Card.Text>
        Terrain: {planets.terrain}
      </Card.Text>
     
      <Button variant="primary" onClick={()=>history.push(`planets/${id}`)}>Read More..</Button>
    </Card.Body>
  </Card>
    </Col>
  )
}

export default PlanetsCard
