import Link from 'next/link';
import React from "react";

// reactstrap components
import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const SongCard = ({ song }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className=" h2 mt-2">{song.title}</CardTitle>
        Keys {song.start_key}
        <CardText className=" mt-2">
        Arrangement {song.arrangement}
        </CardText>
        <CardText className=" mt-1">
        Starts with {song.begins_with}
        </CardText>
        <ButtonToolbar>
          <Link href="song/[id]/edit" as={`song/${song._id}/edit`}>
            <Button className=" m-2" color="primary">Edit</Button>
          </Link>
          <Link href="song/[id]/view" as={`song/${song._id}/view`}>
            <Button className=" m-2" color="secondary">View</Button>
          </Link>
        </ButtonToolbar>
      </CardBody>
    </Card>
  )
};

export default SongCard;