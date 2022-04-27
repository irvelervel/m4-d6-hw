import { useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap'

const AddComment = ({asin}) => {
    const [comment, setComment] = useState({
      comment: "",
      rated: 1,
      elementId: null
    });
  
    useEffect(() => {
      setComment((comments) => ({
        ...comments,
        elementId:asin
      }));
    }, [asin] )

    const sendComment = async (event) => {
        event.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzZmYmE5MDIzOTAwMTVkOTY2MTAiLCJpYXQiOjE2NTEwNzI4MzksImV4cCI6MTY1MjI4MjQzOX0.-d8OqNTqgch0ZQPU4ylFbBGR5WAgNDe2r-aKv15mNlA'
                }
            })
            if (response.ok) {
                alert('Comment sent')
            } else {
                console.log('error')
                alert("Error sending")
            }
        } catch (error) {
            console.log('error')
        }
    }

 
        return (
            <div>
              <Form onSubmit={sendComment}>
                <Form.Group>
                  <Form.Label>Comment text</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add comment here"
                    value={comment.comment}
                    onChange={(event) =>
                      setComment({
                        ...comment,
                        comment: event.target.value
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    as="select"
                    value={comment.rated}
                    onChange={(event) =>
                      setComment({
                        ...comment,
                        rated: event.target.value
                      })
                    }
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </Form>
            </div> )
        
        };

export default AddComment