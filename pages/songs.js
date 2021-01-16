import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [
  {
    dataField: 'song',
    text: 'Song ID'
  },
  {
    dataField: 'title',
    text: 'Title',
    filter: textFilter()
  },
  {
    dataField: 'start_key',
    text: 'Key',
    filter: textFilter()
  },
  {
    dataField: 'tempo',
    text: 'Tempo',
    filter: textFilter()
  },
  {
    dataField: 'tag',
    text: 'Tag',
    filter: textFilter()
  }
];

import dbConnect from '~/middleware/dbConnect';
import Song from '~/models/Song';
import PropTypes from 'prop-types';

export default function SongPage({ songs }) {
  return (
    <BootstrapTable
      keyField="_id"
      data={songs}
      columns={columns}
      filter={filterFactory()}
      pagination={paginationFactory()}
    />
  );
}

SongPage.propTypes = {
  songs: PropTypes.array.isRequired
};

/* Retrieves songs collection data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  const result = await Song.find({});
  const songs = result.map((doc) => {
    // Mongoose result is doc and toObject() converts result to an Obnect
    const song = doc.toObject();
    song._id = song._id.toString();
    return song;
  });

  return { props: { songs: songs } };
}
