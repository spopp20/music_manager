import { useRouter } from 'next/router';
import Link from 'next/link';

const EditInstrumentIdPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Link href="/instruments">
        <a>Back to Instruments</a>
      </Link>
      <p>Edit Instrument {id}</p>
    </>
  );
};

export default EditInstrumentIdPage;
