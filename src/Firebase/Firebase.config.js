const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    // apiKey: "AIzaSyDhDVJ55sNTpWefF5tbsNWQ7t17i3TsBYg",
    // authDomain: "ema-john-simple-f298a.firebaseapp.com",
    // projectId: "ema-john-simple-f298a",
    // storageBucket: "ema-john-simple-f298a.appspot.com",
    // messagingSenderId: "1062705170413",
    // appId: "1:1062705170413:web:4312308471a4581269c9e4"
};

export default firebaseConfig

/*
steps for authentication
----------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method
------------------
Step-2: setup component
1. Create Login Component
2. Create Register Component
3. Create Route for LOgin and Register
------------------------
Step 3: set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
---------------------
Step 4: create auth context hook (useAuth)
1. create a auth context
2. Create context Provider
3. set context Provider context value
4. use Auth Provider
5. create useAuth Hook
---------------------
Step 5: create private route
1. create private Route
2. set private route
------------------
Step-6: Redirect after login
1. after login redirect user to their desired destination
*/