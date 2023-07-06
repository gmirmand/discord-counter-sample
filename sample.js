// >> Handling <<
// Open discord in a browser (preferably a chromium)
// Open the dev console
// Send a message in the targeted channel
// Go to the "network" tab
// Right click on the fetch call = copy > copy as a fetch
// Replace the fetch call of the example with your fetch call
// Replace the "+ i +" in the body:content with your message (Don't forget to remove the nounce in your fetch call)
// Paste the whole script into the chrome console

const loop = (i) => {
fetch("https://discord.com/api/v9/channels/1009479047295799316/messages", {
  "headers": {
    "accept": "*/*",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "MTg3OTY2NDkwNzQwMjYwODY0.G3KV5s.8PX3oursHOhFNnnnq--kec56cJo6rcRS9TCOCo",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "fr",
    "x-discord-timezone": "Europe/Paris",
    "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImZyLUZSIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMy4wLjU2NzIuMTI3IFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiIxMTMuMC41NjcyLjEyNyIsIm9zX3ZlcnNpb24iOiIxMCIsInJlZmVycmVyIjoiaHR0cHM6Ly9nYXJ0aWNwaG9uZS5jb20vIiwicmVmZXJyaW5nX2RvbWFpbiI6ImdhcnRpY3Bob25lLmNvbSIsInJlZmVycmVyX2N1cnJlbnQiOiIiLCJyZWZlcnJpbmdfZG9tYWluX2N1cnJlbnQiOiIiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjoyMTEwNzIsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9"
  },
  "referrer": "https://discord.com/channels/@me/1009479047295799316",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"content\":\"getget le boss\",\"nonce\":\"1126588600851365888\",\"tts\":false,\"flags\":0}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((response) => {
        if (response.ok) {
            setTimeout(() => {
                loop(i + 1)
            }, Math.floor(Math.random() * (1000 - 600 + 1)) + 600) // edit if you want to change the timing
        } else {
            onError(i)
        }
    }).catch(() => {
        onError(i)
    })
}

const onError = (i) => {
    console.error('error on loop' + i);
    setTimeout(() => {
        loop(i)
    }, 2000)
}

loop(1)
