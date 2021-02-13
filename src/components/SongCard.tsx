import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

// react-bootstrap components
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';

const SongCard = ({ song }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className=" h2 mt-2">{song.title}</Card.Title>
        Keys {song.start_key}
        <Card.Text className=" mt-2">Arrangement {song.arrangement}</Card.Text>
        <Card.Text className=" mt-1">Starts with {song.begins_with}</Card.Text>
        <ButtonToolbar>
          <Link href="song/[id]/edit" as={`song/${song._id}/edit`}>
            <Button className=" m-2" color="primary">
              Edit
            </Button>
          </Link>
          <Link href="song/[id]/view" as={`song/${song._id}/view`}>
            <Button className=" m-2" color="secondary">
              View
            </Button>
          </Link>
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
};

SongCard.propTypes = {
  song: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    arrangement: PropTypes.string.isOptional,
    begins_with: PropTypes.string.isOptional,
    start_key: PropTypes.string.isOptional,
    title: PropTypes.string.isRequired,
  }),
};

export default SongCard;
