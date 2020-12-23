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

const InstrumentCard = ({ instrument }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className=" h2 mb-0">{instrument.name}</CardTitle>
        <CardText className=" mt-4">
        {instrument.folder}
        </CardText>
        <ButtonToolbar>
          <Link href="instrument/[id]/edit" as={`instrument/${instrument._id}/edit`}>
            <Button className=" m-2" color="primary">Edit</Button>
          </Link>
          <Link href="instrument/[id]/view" as={`instrument/${instrument._id}/view`}>
            <Button className=" m-2" color="secondary">View</Button>
          </Link>
        </ButtonToolbar>
      </CardBody>
    </Card>
  )
};

export default InstrumentCard;