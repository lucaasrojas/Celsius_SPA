module.exports = {
    MainDB: {
       apiKey: process.env.VUE_APP_FIREBASE_DB_API_KEY,
       authDomain: process.env.VUE_APP_FIREBASE_DB_AUTH_DOMAIN,
       databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
       projectId: process.env.VUE_APP_FIREBASE_DB_PROJECT_ID,
       storageBucket: process.env.VUE_APP_FIREBASE_DB_STORAGE_BUCKET,
       messagingSenderId: process.env.VUE_APP_FIREBASE_DB_MESSAGING_SENDER_ID
   
   }
}
