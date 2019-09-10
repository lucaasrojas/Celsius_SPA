import firebase from 'firebase';
import config from '../config/firebase_config';
let app = firebase.initializeApp(config.MainDB);

export default {
    db: app.database()
}

