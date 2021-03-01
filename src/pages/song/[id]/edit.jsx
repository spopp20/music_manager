import { useRouter } from 'next/router';
import Link from 'next/link';

const EditSongIdPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Link href="/songs">
        <a>Back to Songs</a>
      </Link>
      <p>Edit Song {id}</p>
    </>
  );
};

export default EditSongIdPage;
