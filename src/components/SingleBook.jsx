// import {useState} from 'react'
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'

const SingleBook = ({handleSelected,book,selected}) => {
  // state = {
  //     selected: false
  // }

  // const [selected, setSelected] = useState()

  
    return (
      <>
        <Card
          onClick={() => handleSelected(book.asin)}
          style={{
            border:
              selected === book.asin
                ? '3px solid red'
                : 'none',
          }}
        >
          <Card.Img variant='top' src={book.img} className='imageBook'/>
          <Card.Body>
            <Card.Title className="text-truncate" style={{ color: 'black' }}>
              {book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {selected === book.asin && (
          <CommentArea asin={book.asin} />
        )} */}
      </>
    )
  
}

export default SingleBook
