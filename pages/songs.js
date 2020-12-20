import dbConnect from '../middleware/dbConnect';
import Song from '../models/Song';
import SongCard from '~/components/SongCard';

import {
  Container,
  Col,
  Row,
} from "reactstrap";

export default function SongPage({ songs }) {
  let songCards = songs.map((song) => {
    return (
      <Col sm="4" key={song._id}>
          <SongCard song={song}/>
      </Col>
    )
  })
  return (
    <Container fluid>
      <Row>
        {songCards}
      </Row>
    </Container>
  )
};

/* Retrieves songs collection data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  const result = await Song.find({})
  const songs = result.map((doc) => {
    // Mongoose result is doc and toObject() converts result to an Obnect
    const song = doc.toObject()
    song._id = song._id.toString()
    return song
  })

  return { props: { songs: songs } }
}
