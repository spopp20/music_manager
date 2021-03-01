import { useRouter } from 'next/router';
import Link from 'next/link';

const ScoreDetailsPage = () => {
  const router = useRouter();
  console.log('Router: ', router);
  const song_id = router.query['song_id'];
  const instrument_id = router.query['instrument_id'];

  return (
    <>
      <Link href="/songs">
        <a>Back to Songs</a>
      </Link>
      <p>View Song Score {song_id}</p>
      <p>View Instrument Score {instrument_id}</p>
    </>
  );
};

export default ScoreDetailsPage;
