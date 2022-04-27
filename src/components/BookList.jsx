import { useState } from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'


const BookList = ({books}) => {

    const [searchQuery, setSearchQuery] = useState("")

    const [selectedBook, setSelectedBook] = useState(null)

    
        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Search</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={event =>  setSearchQuery(event.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            {
                                books.filter(bobby => bobby.title.toLowerCase().includes(searchQuery)).map(bobby => (
                                    <Col xs={3} key={bobby.asin} >
                                        <SingleBook
                                            book={bobby}
                                            selectedBook={selectedBook}
                                            changeSelectedBook={asin => setSelectedBook(asin)} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        <CommentArea asin={selectedBook} />
                    </Col>
                </Row>
            </Container>
        )
    

}

export default BookList