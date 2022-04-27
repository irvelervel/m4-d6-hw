import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({asin}) => {

    const [comments, setComments] = useState([])
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const getComments = async () => {
            setLoading(true);
            
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
                    headers: {

                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzZmYmE5MDIzOTAwMTVkOTY2MTAiLCJpYXQiOjE2NTEwNzI4MzksImV4cCI6MTY1MjI4MjQzOX0.-d8OqNTqgch0ZQPU4ylFbBGR5WAgNDe2r-aKv15mNlA'
                    }
                })
              console.log(response);
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setLoading(false);
          setError(false);
        } else {
          console.log("error");
          setLoading(false);
          setError(true);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    getComments();
  }, [asin]);


        return (
            <div>
                {isLoading && <Loading />}
                {isError && <Error />}
                <AddComment asin={asin} />
                <CommentList showComments={comments} />
            </div>
        )
    
}

export default CommentArea