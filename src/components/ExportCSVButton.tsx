import Button from 'react-bootstrap/Button';

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

export default ExportCSVButton;
