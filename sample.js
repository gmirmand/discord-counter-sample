// >> Handling <<
// Open discord in a browser (preferably a chromium)
// Open the dev console
// Send a message in the targeted channel
// Go to the "network" tab
// Right click on the fetch call = copy > copy as a fetch
// Replace the fetch call of the example with your fetch call
// Replace the "+ i +" in the body:content with your message (Don't forget to remove the nounce in your fetch call)
// Paste the whole script into the chrome console

function loop(i) {
    fetch("https://discord.com/api/v8/channels/827658307128524870/messages", {
        "headers": {
            "accept": "*/*",
            "accept-language": "fr",
            "authorization": "mfa.acyAwhoIy9GfY69X9ZYhJuxbmf3UzvGs39RUg_aWbgVxuM_-xqulp95TMoz0qRv5xICu8lu4nw0J-j8MzoYt",
            "content-type": "application/json",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImZyLUZSIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg5LjAuNDM4OS4xMTQgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg5LjAuNDM4OS4xMTQiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vIiwicmVmZXJyaW5nX2RvbWFpbiI6Ind3dy5nb29nbGUuY29tIiwic2VhcmNoX2VuZ2luZSI6Imdvb2dsZSIsInJlZmVycmVyX2N1cnJlbnQiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6Ind3dy5nb29nbGUuY29tIiwic2VhcmNoX2VuZ2luZV9jdXJyZW50IjoiZ29vZ2xlIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6ODEyOTcsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9"
        },
        "referrer": "https://discord.com/channels/308688915492110337/827658307128524870",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"content\":" + i + ",\"\":\"827658340615061504\",\"tts\":false}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then((response) => {
        if (response.ok) {
            timeoutLoop(i + 1);
        } else {
            onError(i)
        }
    }).catch(() => {
        onError(i)
    })
}

function onError(i) {
    console.error('error on loop' + i);
    timeoutLoop(i)
}

function timeoutLoop(i) {
    setTimeout(() => {
        loop(i)
    }, Math.floor(Math.random() * (1000 - 300 + 1)) + 300)
}

loop(1)
