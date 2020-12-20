import Link from 'next/link';
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const SongCard = ({ song }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className=" h2 mb-0">{song.name}</CardTitle>
        <small className=" text-muted">
        Keys {song.keys}
        </small>
        <CardText className=" mt-4">
        {song.arrangement}
        </CardText>
        <div>
          <Link href="song/[id]/edit" as={`song/${song._id}/edit`}>
            <Button color="primary">Edit</Button>
          </Link>
          <Link href="song/[id]/view" as={`song/${song._id}/view`}>
            <Button color="secondary">View</Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  )
};

export default SongCard;