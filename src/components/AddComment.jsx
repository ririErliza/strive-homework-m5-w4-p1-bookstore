import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = ({asin}) => {
  const[comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: asin,
  })

  useEffect( () =>{
    setComment(comment => ({
      ...comment,
      elementId: asin
    }))
  },[asin])
  //if the single book got clicked, asin changed, and setComment() function will be invoked

  const sendComment = async (e) => {
    // e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZmRkYWRhMTNhZjAwMTUyYzFjNjEiLCJpYXQiOjE2NTA5Njk0OTAsImV4cCI6MTY1MjE3OTA5MH0.QrRgqLmGfP5kD0uhi_9E5zlAZBtJ3dziXGlXENqvi2k',
          },
        }
      )
      if (response.ok) {
        // the comment has been sent succesfully!!
        alert('Comment was sent!')
        // this.setState({
        //   comment: {
        //     comment: '',
        //     rate: 1,
        //     elementId: this.props.asin,
        //   },
        // })
        
        setComment({
                comment: '',
                rate: 1,
                elementId:asin,
        })
      } else {
        console.log('error')
        alert('something went wrong')
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
              type='text'
              placeholder='Add comment here'
              value={comment.comment}
              onChange={(e) =>
                setComment({
                    ...comment,
                    comment: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as='select'
              value={comment.rate}
              onChange={(e) =>
                setComment({
                    ...comment,
                    rate: e.target.value,
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
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
}


export default AddComment
