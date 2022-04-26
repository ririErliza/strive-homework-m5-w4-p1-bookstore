import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (commentId, setLoading) => {
  try {
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + commentId,
      {
        method: 'DELETE',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZmRkYWRhMTNhZjAwMTUyYzFjNjEiLCJpYXQiOjE2NTA5Njk0OTAsImV4cCI6MTY1MjE3OTA5MH0.QrRgqLmGfP5kD0uhi_9E5zlAZBtJ3dziXGlXENqvi2k',
        },
      }
    )
    if (response.ok) {
      setLoading(true)
      alert('comment deleted!')
    } else {
      alert('comment NOT deleted!')
    }
  } catch (error) {
    alert('comment NOT deleted!')
  }
}

const SingleComment = ({ comment,  setLoading}) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant='danger'
      className='ml-2'
      onClick={() => deleteComment(comment._id, setLoading)}
    >
      D
    </Button>
  </ListGroup.Item>
)

export default SingleComment
