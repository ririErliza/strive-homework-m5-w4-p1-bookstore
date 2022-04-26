import {useState} from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

const BookList =({searchQuery,books})=>{
  // state = {
  //   //   searchQuery: ''
  //   selected: null,
  // }
const[selected, setSelected]=useState(null)

/*
const [name, setName] = useState("")
setName("Erliza")

const [array, setArray] = useState([])
setArray([1,3,5])
*/



const handleSelected = (asin) => {
    setSelected(asin)
  }

 
    return (
      <Container>
        <Row className="mt-3">
          <Col md={8}>
            <Row>
              {books
                .filter((b) =>
                  b.title.toLowerCase().includes(searchQuery)
                )
                .map((b) => (
                  <Col xs={4} key={b.asin} className="mb-3">
                    <SingleBook
                      book={b}
                      selected={selected}
                      handleSelected={handleSelected}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={selected} />
          </Col>
        </Row>
      </Container>
    )
  
}

export default BookList
