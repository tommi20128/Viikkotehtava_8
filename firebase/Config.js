import { initializeApp} from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot, orderBy } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDm5lwU4w1FyKb_IDdyUChcZJRlJHwoJpo",
    authDomain: "chat-fdf1e.firebaseapp.com",
    projectId: "chat-fdf1e",
    storageBucket: "chat-fdf1e.appspot.com",
    messagingSenderId: "730502301154",
    appId: "1:730502301154:web:57a5f6a6d059b24e1be5bb"
  };

  initializeApp(firebaseConfig)

  const firestore = getFirestore()

  const MESSAGES = 'messages'

  export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    orderBy,
    MESSAGES
  }
