<template>
    <div>
        <h1>spotify list</h1>
        <button @click="login()">Login</button>
        <span id="text"></span>
    </div>
</template>

<script>
import { stringify } from 'querystring';
var request = require('request-promise');
const playlist = "1dvHEa2vHChUzosaaA9X1w";
const url =`https://api.spotify.com/v1/playlists/${playlist}/tracks`
      const my_client_id = "9801d7351ba047ba97d6d216baaacf59";
      var redirect_uri = "http://localhost:8080/spotifyList";
const secret = process.env.VUE_APP_SPOTIFY_SECRET;
      var scopes = "playlist-read-private";

export default {
data () {
    return  {
        listResult:""
    }
},
  methods: {
    login() {
      var redirectTo =
        "https://accounts.spotify.com/authorize" +
        "?response_type=code" +
        "&client_id=" +
        my_client_id +
        (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
        "&redirect_uri=" + encodeURIComponent(redirect_uri);
        console.log("Redirect", redirectTo)
      window.location.replace(redirectTo)
    },
    getList(token) {
        request({
            "method":"GET", 
            "uri": url,
            "json": true,
            "headers": {
                "User-Agent": "My little demo app",
                "Authorization": "Bearer " + token,
            }
            }).then(r => {
                r.items.forEach(element => {
                    let artists = ""; 
                    element.track.artists.forEach(ar => {
                        artists += ar.name+" ";
                    })
                    console.log(`${element.track.name} - ${artists}`)
                });
            })
            .catch(err => {
                console.log("ERROR GETLIST", err.message)
            });
    }
  },
created() {
    if (this.$route.query.code) {

       var options = {
           method: 'post',
           url: 'https://accounts.spotify.com/api/token',
           form: {
               code: this.$route.query.code,
                redirect_uri: redirect_uri,
               grant_type: "authorization_code",
           },
           headers: {
               "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${new Buffer(`${my_client_id}:${secret}`).toString("base64")}`,
            },
            json: true
       }
        request(options)
            .then(token => {
                console.log("Access", token)
            })
            .catch(err => {
                console.log("ERROR GET TOKEN", err)
            });
    }
}
};
</script>

<style>
</style>