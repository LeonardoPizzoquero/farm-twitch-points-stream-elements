require('dotenv/config');
const axios = require('axios')

fs = require('fs');
const { exec } = require('child_process');

const clientId = process.env.CLIENT_ID

// Client-secret encounter in your twitch.tv developer app
const clientSecret = process.env.CLIENT_SECRET

// Open twitch.tv on your favorite browser, remember that your account must be logged in
const browser = process.env.BROWSER

// Current operation system that the script will run
/**
 * Options:
 * windows
 * linux
 */
const OS = process.env.CURRENT_OS

async function getAccessToken() {
  const response = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`)

  return response.data.access_token
}

async function checkIfStreamerIsLive(streamerChannel, accessToken) {
  try {
    const response = await axios.get(`https://api.twitch.tv/helix/search/channels?query=${streamerChannel.toLowerCase()}`, {
      headers: {
        'client-id': clientId,
        'Authorization': `Bearer ${accessToken}`
      }
    })

    const streamerData = response.data.data.find((currentStreamer) => {
      return currentStreamer.display_name.toLowerCase() === streamerChannel.toLowerCase()
    })

    return streamerData.is_live
  } catch(err) {
    console.log(err)
  }
}

async function openBrowserOnStreams() {
  const streamers = process.env.STREAMERS.split(',');

  const openBrowserCommand = {
    windows: `start ${browser}`,
    linux: `run ${browser}`,
  }

  const accessToken = await getAccessToken()

  streamers.map(async (streamer) => {
    const isLive = await checkIfStreamerIsLive(streamer, accessToken)

    if (fs.existsSync(`${streamer}.txt`)) {
      global_data = fs.readFileSync(`${streamer}.txt`).toString();
    } else {
      global_data = ''
    }

    const canOpenTheBrowser = isLive && global_data === 'notopened' || isLive && global_data === ''
  
    if (canOpenTheBrowser) {
      exec(`${openBrowserCommand[OS]} www.twitch.tv/${streamer}` , function(err) {
        if (err){ 
        } else {
          fs.writeFile(`${streamer}.txt`, 'opened', function (err) {
            if (err) throw err;
          })
        }
      })
    }
  
    if (!isLive) {
      fs.writeFile(`${streamer}.txt`, 'notopened', function (err) {
        if (err) throw err;
      })
    }
  
    fs.appendFile(`${streamer}Logs.txt`, `script run at: ${new Date()}\n`, function (err) {
      if (err) throw err;
    })

    console.log(`${streamer}: ${new Date()}\n`)
  })
}

(() => {
  openBrowserOnStreams()

  setInterval(() => {
    openBrowserOnStreams()
  }, 900000)
})();