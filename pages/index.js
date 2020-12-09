import { useUser, fetcher } from '../lib/hooks'
import { connectToDatabase } from '../util/mongodb'
import useSWR from 'swr'

function UserList() {
  const { data: { users } = {} } = useSWR('/api/users', fetcher)
  return (
    <>
      <h2>All users</h2>
      {!!users?.length && (
        <ul>
          {users.map((user) => (
            <li key={user.username}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default function HomePage({ isConnected }) {
  const [user] = useUser()
  return (
    <>
      <h1>
        Example User Pages
      </h1>
      

      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
          for instructions.
        </h2>
      )}

      <ol>
        <li>Now all API has to change to use MongoDB</li>
        <li>Add API for instruments</li>
        <li>Add API for songs</li>
      </ol>

      <h2>Steps to test the example:</h2>

      <h3>Sign up</h3>
      <ol>
        <li>Click Sign up and enter a username and password.</li>
        <li>You will be logged in and redirected home.</li>
        <li>Click Logout. You will be redirected home.</li>
        <li>
          Try sign up again with the same username, you will see an error.
        </li>
      </ol>
      <h3>Sign in</h3>
      <ol>
        <li>Click Login and login again using the same credential.</li>
        <li>You will see an error if you use incorrect credential.</li>
        <li>Otherwise, you will be authenticated and redirected home.</li>
      </ol>
      <h3>Edit profile</h3>
      <ol>
        <li>Click Profile</li>
        <li>Enter a new name and click Update profile.</li>
        <li>Notice how the name in Your profile has changed.</li>
        <li>Click Delete profile</li>
        <li>
          The user is removed and is no longer shown in All users section in
          Home
        </li>
      </ol>
      {user && <p>Currently logged in as: {JSON.stringify(user)}</p>}
      <UserList />
      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}