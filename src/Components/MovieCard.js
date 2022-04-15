import React from 'react'
import { Card,Button } from 'react-bootstrap'

function MovieCard({Movie}) {
    // console.log(Movie)
return (



    <Card  style={{ width: '18rem',height:"500px" }}>
<Card.Img variant="top" src= {Movie.posterUrl} style={{width: '100px',height:"100px"}}/>
<Card.Body>
    <Card.Title>{Movie.title}</Card.Title>
    <Card.Text>
    {Movie.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
)
}


export default MovieCard