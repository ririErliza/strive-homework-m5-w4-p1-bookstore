import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow, setLoading }) => (
    <ListGroup style={{ color: 'black' }}>
        {
            commentsToShow.map(comment => (
                <SingleComment setLoading={setLoading} comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)

export default CommentList