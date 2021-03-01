import { useRouter } from 'next/router';
import Link from 'next/link';

const ViewInstrumentIdPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Link href="/instruments">
        <a>Back to Instruments</a>
      </Link>
      <p>View Instrument {id}</p>
    </>
  );
};

export default ViewInstrumentIdPage;
