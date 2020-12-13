import Link from 'next/link'
import dbConnect from '../middleware/dbConnect'
import Instrument from '../models/Instrument'


export default function InstrumentsPage({ instruments }) {
  return (
    <>
      {/* Create a card for each instrument */}
      {instruments.map((instrument) => (
        <div key={instrument._id}>
          <div className="card">
            <h5 className="item-name">{instrument.name}</h5>
            <div className="main-content">
              <p className="item-name">{instrument.folder}</p>

              <div className="btn-container">
                <Link href="/[id]/edit" as={`/${instrument._id}/edit`}>
                  <button className="btn edit">Edit</button>
                </Link>
                <Link href="/[id]" as={`/${instrument._id}`}>
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
