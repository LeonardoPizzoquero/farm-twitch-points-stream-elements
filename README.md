# Farm points of twitch stream elements every day of your favorite streamers
## This script will open your browser when one of your favorite streamers is online so you don't miss a minute of the live

## Technologies:

- [x] JavaScript
- [x] Node.js
- [x] Axios
- [x] Twitch API v5

### What you will need:

**1. Node.js in version 14 or greater, you can download from this link: [Node.js](https://nodejs.org/)**

**2. A developer account on twitch.tv to get your app credentials, follow the steps below to do it:**
  - First access the twitch developers website: [Twitch Developers](https://dev.twitch.tv/)
  - Make login with your twitch account or create a new account
  - Click in Applications tab and then click Register Your Application
  
  ![Print](https://github.com/LeonardoPizzoquero/farm-twitch-points-stream-elements/blob/main/screenshots/register.png)
  
  - Add a name for your application, e.g: farm-points-bot-streamers
  - Add http://localhost as OAuth Redirect URLs
  - Add category as Other
  - Add Scripts for other details and click Create
  - Click on manage the new application and generate a new client secret
  
  ![Print](https://github.com/LeonardoPizzoquero/farm-twitch-points-stream-elements/blob/main/screenshots/manage.png)
  
  - Keep your client-id and client-secret copied for .env information
  
  ![Print](https://github.com/LeonardoPizzoquero/farm-twitch-points-stream-elements/blob/main/screenshots/secrets.png)
  

**3. Clone this repository and access the folder;**

**4. Copy .env.example file and create a new one as .env;**

**5. Fill the fields in .env like below:**

**6. Go back to your terminal and install all dependencies, running:**

```sh
npm install
```
or
  ```sh
yarn
```

**7. Start the script with**
```sh
npm run start
```
or
  ```sh
yarn start
```

**8. That's it, keep your console open and the script will be run every 15 minutes to check if your streamer is online.**
