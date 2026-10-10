import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDvjVz3l4N-HzMedsiEh1RIYDgy-h_lmMc',
  authDomain: 'asset-library-a5c1f.firebaseapp.com',
  projectId: 'asset-library-a5c1f',
  storageBucket: 'asset-library-a5c1f.firebasestorage.app',
  messagingSenderId: '895347643353',
  appId: '1:895347643353:web:8ac2d13922755b74083fc8'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
