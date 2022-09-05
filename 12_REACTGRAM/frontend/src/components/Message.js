import { Alert } from 'react-bootstrap';

const Message = ({ msg, type }) => {
  return (
    <Alert variant={type} className="mt-3">
        {msg} 
    </Alert>
  )
}

export default Message;