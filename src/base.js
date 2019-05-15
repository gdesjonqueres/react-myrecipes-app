import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB-_40I36CoBxkjJunmdEbfQWficUoaQ5A",
  authDomain: "recipe-app-b9332.firebaseapp.com",
  databaseURL: "https://recipe-app-b9332.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }
export default base
