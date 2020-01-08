<template>
    <div class="col-md-12">
        <loading :active.sync="isLoading" 
        :can-cancel="false"
        :is-full-page="true"></loading>
        <h1>Get tracks from Spotify's list</h1>
        <span>{{error}}</span>
        <div class="row my-4 ">
            <div class="col-md-6 ml-auto">
                <input class="form-control" v-model="playlistID" placeholder="Tracklist ID" ref="tracklistId" />
            </div>
            <div class="col-md-5 mr-auto">
                <button class="btn btn-primary col-sm-5" @click="alreadyToken()">Get Tracklist</button>
                <button v-if="this.trackList.length > 0" class="btn btn-primary col-sm-5 ml-1" @click="exportList()">Download List</button>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(track, index) in trackList" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{track.title}}</td>
                    <td>{{track.artist}}</td>
                    <td><font-awesome-icon fas :icon="'search'" style="font-size: 1rem" @click="searchTrack(track)"></font-awesome-icon></td>
                </tr>
                
            </tbody>
        </table>
            
    </div>
</template>

<script>
const params = require('../../../config/spotifyList_config')
var request = require('request-promise');
var FileSaver = require('file-saver');
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
data () {
    return  {
        listResult:"",
        trackList: [],
        playlistID: '',
        error: '',
        isLoading: false
    }
},
components: {
    Loading
},
  methods: {
    login() {
      var redirectTo = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + params.my_client_id +
      (params.scopes ? '&scope=' + encodeURIComponent(params.scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(params.redirect)
      window.location.replace(redirectTo)
    },
    getList(token, tokenType, urlNext = undefined) {
        this.isLoading =true;
        const url =`https://api.spotify.com/v1/playlists/${this.$data.playlistID}/tracks?offset=0`
        request({
        "method":"GET", 
        "uri": urlNext || url,
        "json": true,
        "headers": {
            "User-Agent": "My little demo app",
            "Authorization": `${tokenType} ${token}`,
        }
        }).then(r => {
            r.items.forEach(element => {
                let artists = ""; 
                element.track.artists.forEach(ar => {
                    artists += ar.name+" ";
                })
                this.trackList.push({artist: artists, title:element.track.name})
            });

            if (r.next) {
                this.getList(token, tokenType, r.next)
                return;
            }
            this.isLoading = false;
        })
        .catch(err => {
            this.isLoading = false;
        });

    },
    alreadyToken() {
        this.error = '';
        if (window.location.href.includes('access_token') && window.location.href.includes('token_type')) {

            const parameters = createObjectFromURL(window.location.href);
            this.getList(parameters.access_token, parameters.token_type);
            
        } else {
            this.login();
        }
    },
    searchTrack(track) {
        let queryOptions = `${track.title} ${track.artist}`
        console.log("queryOptions", queryOptions)
        queryOptions = queryOptions.replace(/ /g,'+');
        console.log("queryOptions 2", queryOptions)

        window.open(
        `https://www.youtube.com/results?search_query=${queryOptions}`,
        '_blank' // <- This is what makes it open in a new window.
        );
    },
    exportList(){
        let content;
        this.trackList.forEach(track => {
             content += `${track.title} - ${track.artist} \n`;
        })
        var date = new Date();
        var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, `tracklist-${this.playlistID}-${date.toDateString()}.txt`);
    
    }

  },
mounted() {
    this.alreadyToken();
}
};

function createObjectFromURL(url){
    let urlParameters = url.split('#')[1];
    urlParameters = urlParameters.split('&');
    let parameters = {};
    urlParameters.forEach(par => {
        let param = par.split('=')
        parameters[param[0]] = param[1];
    })
    return parameters;
}

</script>

<style>
</style>