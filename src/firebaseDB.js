import firebase from 'firebase';
import config from './config';
console.log("config",config)
let app = firebase.initializeApp(config.MainDB);
export default {
    db: app.database()
}

