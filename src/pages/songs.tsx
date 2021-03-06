import dbConnect from '~/middleware/dbConnect';
import Song from '~/models/Song';
import AlphabetSearch from '@components/AlphabetSearch';
import ExportCSVButton from '@components/ExportCSVButton';
import Container from 'react-bootstrap/Container';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { useRouter } from 'next/router';

const headerSortingStyle = { backgroundColor: '#c0c0c9' };

const columns = [
  {
    dataField: 'song',
    text: 'Song ID',
    hidden: true,
  },
  {
    dataField: 'title',
    text: 'Title',
    sort: true,
    headerSortingStyle,
    // eslint-disable-next-line react/display-name
    sortCaret: (order) => {
      if (!order) return <span>&nbsp;&#9650;&#9660;</span>;
      else if (order === 'asc') return <span>&nbsp;&#9660;</span>;
      else if (order === 'desc') return <span>&nbsp;&#9650;</span>;
      return null;
    },
  },
  {
    dataField: 'start_key',
    text: 'Key',
    sort: true,
    headerSortingStyle,
    // eslint-disable-next-line react/display-name
    sortCaret: (order) => {
      if (!order) return <span>&nbsp;&#9650;&#9660;</span>;
      else if (order === 'asc') return <span>&nbsp;&#9660;</span>;
      else if (order === 'desc') return <span>&nbsp;&#9650;</span>;
      return null;
    },
  },
  {
    dataField: 'tempo',
    text: 'Tempo',
    sort: true,
    headerSortingStyle,
    // eslint-disable-next-line react/display-name
    sortCaret: (order) => {
      if (!order) return <span>&nbsp;&#9650;&#9660;</span>;
      else if (order === 'asc') return <span>&nbsp;&#9660;</span>;
      else if (order === 'desc') return <span>&nbsp;&#9650;</span>;
      return null;
    },
  },
  {
    dataField: 'begins_with',
    text: 'Words...',
  },
  {
    dataField: 'tag',
    text: 'Tag',
    hidden: true,
  },
];

const defaultSorted = [
  {
    dataField: 'title',
    order: 'asc',
  },
];

export default function SongPage({ songs }) {
  const router = useRouter();
  const SEARCH_ON_COLUMNS = ['title'];

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  function onColumnMatch({ searchText, value, column }) {
    // implement your custom match logic on every cell value
    if (!SEARCH_ON_COLUMNS.includes(column.dataField)) {
      return false;
    }

    if (capitalize(value).startsWith(capitalize(searchText))) {
      return true;
    }
    return false;
  }

  // Show the Song Details, Or Skip Song Details and Show the Score
  const rowEvents = {
    onClick: (e, row) => {
      console.log('Row ', row);

      // TODO Display the song Details Page
      const href = `score/${row.song}/8/details`;
      router.push(href, undefined, { shallow: true });
    },
  };

  return (
    <Container className="panel-gradient">
      <ToolkitProvider
        keyField="_id"
        data={songs}
        columns={columns}
        exportCSV={true}
        search={{
          onColumnMatch,
        }}>
        {(props) => (
          <div>
            <AlphabetSearch {...props.searchProps}></AlphabetSearch>
            <BootstrapTable
              {...props.baseProps}
              bootstrap4={true}
              condensed={false}
              defaultSorted={defaultSorted}
              hover
              striped
              pagination={paginationFactory()}
              rowEvents={rowEvents}
            />
            <ExportCSVButton {...props.csvProps}>Download Spreadsheet</ExportCSVButton>
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
}

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
