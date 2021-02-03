# Farm twitch stream elements points every day of your favorite streamers
## This script will open your browser when one of your favorite streamers is online so you don't miss a minute of the live

### What you will need:

1- Node.js in version 14 or greater, you can download from this link: https://nodejs.org/en/;

2- A developer account on twitch.tv to get your app credentials, follow the steps below to do it:
  - First access the twitch developers website: https://dev.twitch.tv/
  - Make login with your twitch account or create a new account
  - Click in Applications tab and then click Register Your Application
  - Add a name for your application, e.g: farm-points-bot-streamers
  - Add http://localhost as OAuth Redirect URLs
  - Add category as Other
  - Add Scripts for other details and click Create
  - Click on manage the new application and generate a new client secret
  - Keep your client-id and client-secret copied for .env information

3- Clone this repository and access the folder;

4- Copy .env.example file and create a new one as .env;

5- Fill the fields in .env like below:

6- Go back to your terminal and install all dependencies, running:
  - npm install
  or
  - yarn

7- Start the script with: npm run start or yarn start

8- That's it, keep your console open and the script will be run every 15 minutes to check if your streamer is online.

## Technologies:

JavaScript
Node.js
Axios
Twitch API v5