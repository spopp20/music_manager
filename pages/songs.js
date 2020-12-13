import Link from 'next/link'
import dbConnect from '../middleware/dbConnect'
import Song from '../models/Song'


export default function SongPage({ songs }) {
  return (
    <>
      {/* Create a card for each song */}
      {songs.map((song) => (
        <div key={song._id}>
          <div className="card">
            <h5 className="item-name">{song.name}</h5>
            <div className="main-content">
              <p className="item-name">{song.arrangement}</p>
              <p className="item-name">{song.keys}</p>

              <div className="btn-container">
                <Link href="/[id]/edit" as={`/${song._id}/edit`}>
                  <button className="btn edit">Edit</button>
                </Link>
                <Link href="/[id]" as={`/${song._id}`}>
                  <button className="btn view">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

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
