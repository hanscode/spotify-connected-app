# Spotify Connected App
### Spotify Web API Integration
Author - Hans Steffens

## Project Overview
This project is about a full stack web application to visualize personalized Spotify data with the help of Node.js, React, Express, Styled Components, and the Spotify Web API.

## Technologies used
- [Node.js](https://nodejs.org/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Express](https://expressjs.com/)
- [React Router](https://reach.tech/router)
- [Styled Components](https://www.styled-components.com/)
- [Heroku](https://www.heroku.com/)

## 🛠 Local Installation & Set Up

1. Register a Spotify App in your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and add `http://localhost:8888/callback` as a Redirect URI in the app settings.

2. Create a `.env` file at the root of the project based on `.env.example` and add your unique `CLIENT_ID` and `CLIENT_SECRET` from the Spotify dashboard

3. Ensure [nvm](https://github.com/nvm-sh/nvm) and [npm](https://www.npmjs.com/) are installed globally.

4. Install the correct version of Node

    ```shell
    nvm install
    ```

5. Install dependencies

    ```shell
    npm install
    ```

6. Run the React app on <http://localhost:3000> and the Node server on <http://localhost:8888>

    ```shell
    npm start
    ```
## 🚀 Deploying to Heroku with Git

1. Create a [Heroku](https://www.heroku.com/) app

2. Add your Heroku app as a git remote

    ```shell
    heroku git:remote -a your-app-name
    ```

3. Add `http://your-app-name.herokuapp.com/callback` as a Redirect URI in your Spotify app's settings.

4. In your app's **Settings** tab in the Heroku dashboard, add [config vars](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard).

   Based on the values in your `.env` file, the `CLIENT_ID`, `CLIENT_SECRET`, `REDIRECT_URI`, and `FRONTEND_URI` key value pairs. Make sure to replace the `localhost` URLs with your heroku app's URL.

   ```env
   REDIRECT_URI: http://your-app-name.herokuapp.com/callback
   FRONTEND_URI: http://your-app-name.herokuapp.com
   ```

5. Push to Heroku

    ```shell
    git push heroku main
    ```
> [!NOTE]  
> <b>herokuapp.com subdomain names are changing:</b> <br />
> Heroku started appending identifiers to subdomains on <a href="https://devcenter.heroku.com/changelog-items/2597" target="_blank">June 14, 2023.</a> Starting June 14, 2023, new apps get a randomly generated 12-character identifier appended to the subdomain portion of the built-in `APPNAME.herokuapp.com` domains.<br />
> The new format is `APPNAME-IDENTIFIER.herokuapp.com,` for example, `your-app-name-1234567890ab.herokuapp.com`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.