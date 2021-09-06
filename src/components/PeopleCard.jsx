import React from 'react'
import {useHistory} from 'react-router-dom'
import {Card, Button, Col} from 'react-bootstrap'
import { getIdFromUrl } from "../helpers/getId";

function PeopleCard({people}) {
  const history=useHistory()
  const id = getIdFromUrl(people.url)


  return (
    <Col md="4" className="my-3">
    <Card>
    <Card.Header as="h5" variant="secondary">{people.name}</Card.Header>
    <Card.Body>
      <Card.Text>
        Height: {people.height}
      </Card.Text>
      <Card.Text>
     Birth Year: {people.birth_year}
      </Card.Text>
      <Card.Text>
       Eye Color: {people.eye_color}
      </Card.Text>
     
      <Button variant="primary" onClick={()=>history.push(`people/${id}`)}>Read More..</Button>
    </Card.Body>
  </Card>
    </Col>
  )
}

export default PeopleCard
