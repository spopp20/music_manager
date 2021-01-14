# music_manager

Music Manager is a full stack html5 single page web application designed to manage songs for multiple instruments including voice and orchastra. It will deliver song lyrics and orchestral instrument notations.

It was created using next.js, react, and uses an API to communicate with a Mongo Database for data persistence.

## Current Status

Some of the API is in place

- The instruments API is working using MongoDB
- The login, logout, and users API is working going to code to fake a database.
- The songs API is working
- The scores collection is loaded

# Getting Started

Install the Git client on your machine. See https://git-scm.com/downloads .

To begin developing get the code onto your machine by using the Git client to Fork or Clone this repository.

Install Node on your machine. See https://nodejs.dev/ .

## Prerequisites

Go into the folder containing the downloaded code and install the required packages with npm.

```bash
npm install
```

### Configuration

Establish a MongoDB Atlas account and setup a free shared cluster for online data storage. This provides a place to store data. See https://mongodb.com

Get the connection string of your MongoDB shared cluster. It wil be a string like:

```bash
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

For more details, follow this [MongoDB Guide](https://docs.mongodb.com/guides/server/drivers/) on how to connect to MongoDB.

Set up environment variables

Copy the `.env.local.example` file to a new file that you create `.env.local`

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

Example:

```bash
MONGODB_URI=mongodb+srv://testuser:dontreusethis@cluster0-gc0a7.mongodb.net/music?retryWrites=true&w=majority
```

# Usage

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```bash
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

```bash
npm run dev
```

```bash
npm run lint
```

Lint and code

```bash
npm run format
```

Format source files using Prettier formatting rules.

# next-connect and Passport

This example creates a basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) app using [next-connect](https://github.com/hoangvvo/next-connect) and cookie-based authentication with [Passport.js](http://www.passportjs.org/). The cookie is securely encrypted using [@hapi/iron](https://github.com/hapijs/iron).

The example shows how to do a sign up, login, logout, and account deactivation. It utilizes the cache [SWR](https://swr.now.sh/) to fetch the API.

For demo purpose, the users database is stored in the cookie session. You need to replace the cookie storage with an actual database to store users in [lib/db.js](lib/db.js).

In production, you must use a password hashing library, such as [argon2](https://github.com/ranisalt/node-argon2) or [bcrypt](https://www.npmjs.com/package/bcrypt).

## Deploy your own

Deploy using [Vercel](https://vercel.com):
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/spopp20/music_manager)

## Environment Variables

The following files should be in the .gitignore to keep secret information secret.

| File             | Purpose                                                      |
| ---------------- | ------------------------------------------------------------ |
| .env             | Provides defaults for all environments                       |
| .env.local       | Store secret evironment variables that overrides other files |
| .env.development | Defaults for development `next dev` runs                     |
| .env.production  | Defaults for production `next start` runs                    |

Do not commit a .env file or any file that starts with .env and ends with .local.

Copy .env.example variables into your .env.local file and then fix to us actual information that will remain secret and never be added to Github.

## Testing a new API

MongoDB collections are similar to a database table, but can contain JSON data.
Collections are named in lower case and are plural such as "instruments"

Use the browser default GET function locally retrieve raw JSON results.

[api/instruments](http://localhost:3000/api/instruments)

[api/songs](http://localhost:3000/api/songs)

## Added react-bootstrap-table2

```bash
npm install react-bootstrap-table-next
npm install react-bootstrap-table2-filter
```
