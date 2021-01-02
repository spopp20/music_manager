import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

// react-bootstrap components
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';

const InstrumentCard = ({ instrument }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className=" h2 mb-0">{instrument.name}</Card.Title>
        <Card.Text className=" mt-4">{instrument.folder}</Card.Text>
        <ButtonToolbar>
          <Link href="instrument/[id]/edit" as={`instrument/${instrument._id}/edit`}>
            <Button className=" m-2" color="primary">
              Edit
            </Button>
          </Link>{' '}
          <Link href="instrument/[id]/view" as={`instrument/${instrument._id}/view`}>
            <Button className=" m-2" color="secondary">
              View
            </Button>
          </Link>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
};

InstrumentCard.propTypes = {
  instrument: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    folder: PropTypes.string.isOptional
  })
};

export default InstrumentCard;
