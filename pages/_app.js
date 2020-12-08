
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Navbar />
      <main>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}
