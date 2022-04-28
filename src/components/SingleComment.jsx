import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzZmYmE5MDIzOTAwMTVkOTY2MTAiLCJpYXQiOjE2NTEwNzI4MzksImV4cCI6MTY1MjI4MjQzOX0.-d8OqNTqgch0ZQPU4ylFbBGR5WAgNDe2r-aKv15mNlA'
            }
        })
        if (response.ok) {
            alert('comment deleted!')
        } else {
            alert('Unsuccessful!')
        }
    } catch (error) {
        alert('Unsuccessful!')
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Del
      </Button>
    </ListGroup.Item>
  );

export default SingleComment