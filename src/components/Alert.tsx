import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import AlertIcon from '../assets/exclamation-triangle.svg';

interface AlertMessageProps {
  title?: string;
  message?: string;
}

export const AlertBox: React.FC<AlertMessageProps> = (props) => {
  return (
    <Alert variant="danger" dismissible>
        <div>
           <img src={AlertIcon} />
           <span>{props.message}</span>
        </div>
    </Alert>
  );
};

AlertBox.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
};
