import { useRouter } from 'next/router'

const ViewSongIdPage = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>View Song {id}</p>
  }

  export default ViewSongIdPage;
