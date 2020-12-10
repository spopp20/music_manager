# music_manager

Created with next.js, react.js and the example template next.js/examples/with-passport-and-next-connect

## Install and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Configuration

### Step 1. Get the connection string of your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

For more details, follow this [MongoDB Guide](https://docs.mongodb.com/guides/server/drivers/) on how to connect to MongoDB.

### Step 2. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `MONGODB_URI` should be the MongoDB connection string you got from step 1.


### Step 3. Run Next.js in development mode

```bash
npm install
npm run dev
```


# next-connect and Passport

This example creates a basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) app using [next-connect](https://github.com/hoangvvo/next-connect) and cookie-based authentication with [Passport.js](http://www.passportjs.org/). The cookie is securely encrypted using [@hapi/iron](https://github.com/hapijs/iron).

The example shows how to do a sign up, login, logout, and account deactivation. It utilizes the cache [SWR](https://swr.now.sh/) to fetch the API.

For demo purpose, the users database is stored in the cookie session. You need to replace the cookie storage with an actual database to store users in [lib/db.js](lib/db.js).

In production, you must use a password hashing library, such as [argon2](https://github.com/ranisalt/node-argon2) or [bcrypt](https://www.npmjs.com/package/bcrypt).

## Deploy your own

Deploy using [Vercel](https://vercel.com): 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/spopp20/music_manager)

Deploy using [Netlify](https://netlify.com)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/spopp20/music_manager&utm_source=github)

[![Netlify Status](https://api.netlify.com/api/v1/badges/79940108-4464-43ab-951a-7e33af7417e6/deploy-status)](https://app.netlify.com/sites/music-manager-net/deploys)

## How to use the template

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-passport-and-next-connect music_manager
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run dev`

Builds the app for development to the `build` folder.\

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

## Environment Variables

The following files should be in the .gitignore to keep secret information secret.

| File | Purpose |
|---|---|
| .env | Provides defaults for all environments |
| .env.local | Store secret evironment variables that overrides other files |
| .env.development | Defaults for development `next dev` runs |
| .env.production | Defaults for production `next start` runs |

Do not commit a .env file or any file that starts with .env and ends with .local.

Copy .env.example variables into your .env.local file and then fix to us actual information that will remain secret and never be added to Github.

## Testing a new API

MongoDB collections are similar to a database table, but can contain JSON data. 
Collections are named in lower case and are plural such as "instruments"
 
Use the browser default GET function locally retrieve raw JSON results.

[http://localhost:3000/api/instruments](http://localhost:3000/api/instruments)
