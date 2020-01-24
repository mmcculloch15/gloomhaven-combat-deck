import firebase from 'firebase/app'
import 'firebase/firestore'

// It's fine to have this here, as confirmed by firebase devs.  The DB implements security rules to prevent undesirable access
const firebaseConfig = {
  apiKey: 'AIzaSyCuye7LnCYlwtZDOgLze_WGjA0aYACu7zQ',
  authDomain: 'gloomhaven-combat-deck.firebaseapp.com',
  databaseURL: 'https://gloomhaven-combat-deck.firebaseio.com',
  projectId: 'gloomhaven-combat-deck',
  storageBucket: 'gloomhaven-combat-deck.appspot.com',
  messagingSenderId: '667696639659',
  appId: '1:667696639659:web:195e8b893992bbed33d1ee',
  measurementId: 'G-V3K5VD7H7V',
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
