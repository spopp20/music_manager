import dbConnect from '~/middleware/dbConnect';
import Song from '~/models/Song';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const headerSortingStyle = { backgroundColor: '#c0c0c9' };

const columns = [
  {
    dataField: 'song',
    text: 'Song ID'
  },
  {
    dataField: 'title',
    text: 'Title',
    sort: true,
    headerSortingStyle,
    sortCaret: (order, column) => {
      if (!order) return <span>&nbsp;&nbsp;&#9650;&#9660;</span>;
      else if (order === 'asc') return <span>&nbsp;&nbsp;&#9660;</span>;
      else if (order === 'desc') return <span>&nbsp;&nbsp;&#9650;</span>;
      return null;
    }
  },
  {
    dataField: 'start_key',
    text: 'Key',
    sort: true,
    headerSortingStyle,
    sortCaret: (order, column) => {
      if (!order) return <span>&nbsp;&nbsp;&#9650;&#9660;</span>;
      else if (order === 'asc') return <span>&nbsp;&nbsp;&#9660;</span>;
      else if (order === 'desc') return <span>&nbsp;&nbsp;&#9650;</span>;
      return null;
    }
  },
  {
    dataField: 'tempo',
    text: 'Tempo',
    sort: true,
    headerSortingStyle,
    sortCaret: (order, column) => {
      if (!order) return <span>&nbsp;&nbsp;&#9650;&#9660;</span>;
      else if (order === 'asc') return <span>&nbsp;&nbsp;&#9660;</span>;
      else if (order === 'desc') return <span>&nbsp;&nbsp;&#9650;</span>;
      return null;
    }
  },
  {
    dataField: 'tag',
    text: 'Tag',
    sort: true,
    headerSortingStyle,
    sortCaret: (order, column) => {
      if (!order) return <span>&nbsp;&nbsp;&#9650;&#9660;</span>;
      else if (order === 'asc') return <span>&nbsp;&nbsp;&#9660;</span>;
      else if (order === 'desc') return <span>&nbsp;&nbsp;&#9650;</span>;
      return null;
    }
  }
];

const defaultSorted = [
  {
    dataField: 'title',
    order: 'asc'
  }
];

export default function SongPage({ songs }) {
  return (
    <BootstrapTable
      bootstrap4
      striped
      keyField="_id"
      data={songs}
      columns={columns}
      filter={filterFactory()}
      pagination={paginationFactory()}
      defaultSorted={defaultSorted}
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
