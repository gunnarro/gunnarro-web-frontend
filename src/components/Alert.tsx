import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

interface AlertMessageProps {
  title?: string;
  message?: string;
}

export const AlertBox: React.FC<AlertMessageProps> = (props) => {
  return (
    <Alert variant="danger" dismissible>
        <Alert.Heading>Application error!</Alert.Heading>
        <p>
            {props.message}
        </p>
    </Alert>
  );
};

AlertBox.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
};
