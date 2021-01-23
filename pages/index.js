import { useUser, fetcher } from '../lib/hooks';
import useSWR from 'swr';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserList() {
  const { data: { users } = {} } = useSWR('/api/users', fetcher);
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
  );
}

export default function HomePage() {
  const [user] = useUser();
  return (
    <>
      <h1>Example User Pages</h1>

      <ol>
        <li>Now all API has to change to use MongoDB</li>
        <li>Add API for instruments</li>
        <li>Add API for songs</li>
      </ol>

      <h2>Steps to test the example:</h2>

      <h3>Edit profile</h3>
      <ol>
        <li>Click Profile</li>
        <li>Enter a new name and click Update profile.</li>
        <li>Notice how the name in Your profile has changed.</li>
        <li>Click Delete profile</li>
        <li>The user is removed and is no longer shown in All users section in Home</li>
      </ol>
      {user && <p>Currently logged in as: {JSON.stringify(user)}</p>}
      <UserList />
      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
}
