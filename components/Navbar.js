import Link from 'next/link'
import { useUser } from '../lib/hooks'

export default function Navbar() {
  const [user, { mutate }] = useUser()

  async function handleLogout() {
    await fetch('/api/logout')
    mutate({ user: null })
  }
  
  return (
    <header>
      <nav>
        <ul>
        <li>
            <Link href="/">
              <img size="mini" src="/android-chrome-192x192.png" alt="Logo" width="100" height="100"/>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/instruments">
              <a>Instruments</a>
            </Link>
          </li>
          <li>
            <Link href="/songs">
              <a>Songs</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <a role="button" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signup">
                  <a>Sign up</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
