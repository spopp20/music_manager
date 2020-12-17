import { useRouter } from 'next/router'

const EditInstrumentIdPage = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Edit Instrument {id}</p>
  }

  export default EditInstrumentIdPage;