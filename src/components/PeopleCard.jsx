import React from 'react'
import {Card, Button, Col} from 'react-bootstrap'

function PeopleCard({people}) {
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
     
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </Col>
  )
}

export default PeopleCard
