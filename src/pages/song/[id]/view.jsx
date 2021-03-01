import { useRouter } from 'next/router';
import Link from 'next/link';

const ViewSongIdPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Link href="/songs">
        <a>Back to Songs</a>
      </Link>
      <p>View Song {id}</p>
    </>
  );
};

export default ViewSongIdPage;
