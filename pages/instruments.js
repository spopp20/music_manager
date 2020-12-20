import dbConnect from '../middleware/dbConnect'
import Instrument from '../models/Instrument';
import InstrumentCard from '~/components/InstrumentCard';

import {
  Container,
  Col,
  Row,
} from "reactstrap";

export default function InstrumentsPage({ instruments }) {
  let instrumentCards = instruments.map((instrument) => {
    return (
      <Col sm="4" key={instrument._id}>
        <InstrumentCard instrument={instrument}/>
      </Col>
    )
  })
  return (
    <Container fluid>
      <Row>
        {instrumentCards}
      </Row>
    </Container>
  )
};

/* Retrieves instruments collection data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  const result = await Instrument.find({})
  const instruments = result.map((doc) => {
    // Mongoose result is doc and toObject() converts result to an Obnect
    const instrument = doc.toObject()
    instrument._id = instrument._id.toString()
    return instrument
  })

  return { props: { instruments: instruments } }
}
