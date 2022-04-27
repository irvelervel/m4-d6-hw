import React from 'react'
import { Card } from 'react-bootstrap'


const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {


        return (
            <>
                <Card
                    onClick={() => changeSelectedBook(book.asin)}
                    style={{ border: selectedBook === book.asin ? "1px solid blue" : "none" }}
                >
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Title style={{ 
                            color: 'black',
                             whiteSpace: "nowrap",
                             overflow: "hidden",
                             textOverflow: "ellipsis" 
                            }}>{book.title}</Card.Title>
                    </Card.Body>
                </Card>
        
            </>
        )
    }



export default SingleBook