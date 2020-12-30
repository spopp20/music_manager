import { useRouter } from 'next/router';

const EditSongIdPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Edit Song {id}</p>;
};

export default EditSongIdPage;
