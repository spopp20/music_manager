import { useRouter } from 'next/router'

const ViewInstrumentIdPage = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>View Instrument {id}</p>
  }

  export default ViewInstrumentIdPage;
