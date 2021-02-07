import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ExportCSVButton = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div>
      <Button variant="info" onClick={handleClick}>
        Export to CSV
      </Button>
    </div>
  );
};

ExportCSVButton.propTypes = {
  onExport: PropTypes.func.isRequired
};

export default ExportCSVButton;
