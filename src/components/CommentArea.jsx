import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea =({asin}) => {

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  
  useEffect( ()=> {
    getComment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[asin])


  //useEffect below is to make the comment that deleted disappear without re-freshing the page all the time
  useEffect( ()=> {
    if(isLoading){
    getComment()
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoading])


  
  const getComment =async()=>{
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          asin,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZmRkYWRhMTNhZjAwMTUyYzFjNjEiLCJpYXQiOjE2NTA5Njk0OTAsImV4cCI6MTY1MjE3OTA5MH0.QrRgqLmGfP5kD0uhi_9E5zlAZBtJ3dziXGlXENqvi2k',
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
   
        setComments(comments)
        setIsLoading(false)
        setIsError(false)

      } else {
        console.log('error')
        
        setIsLoading(false)
        setIsError(true)
      }
    } 
    catch (error) {
      console.log(error)
      
      setIsLoading(false)
      setIsError(true)
    }
  }


 

    return (
      <div>
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment  asin={asin} />
        <CommentList setLoading={setIsLoading} commentsToShow={comments} />
      </div>
    )

}

export default CommentArea
