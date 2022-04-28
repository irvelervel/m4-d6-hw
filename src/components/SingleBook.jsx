import React from 'react'
import { Card } from 'react-bootstrap'


const SingleBook = ({book,selectedBook,changeSelectedBook}) => (
    <div>
        <Card 
            onClick={() => changeSelectedBook(book.asin)}
            style={{ border: selectedBook === book.asin ? "2px solid blue" : "none" }}
        >
            <Card.Img variant="top" src={book.img} style={{ height: 200 }} />
            <Card.Body>
                <Card.Title style={{
                    color: 'black',
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                    
                }}>{book.title}</Card.Title>
            </Card.Body>
        </Card>

    </div>
)



export default SingleBook