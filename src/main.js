import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDs4FkL0rYr347BEOxHm1d0Rp6Zd_06yFk",
  authDomain: "vue-fire-ex-bt-sheet.firebaseapp.com",
  databaseURL: "https://vue-fire-ex-bt-sheet-default-rtdb.firebaseio.com",
  projectId: "vue-fire-ex-bt-sheet",
  storageBucket: "vue-fire-ex-bt-sheet.appspot.com",
  messagingSenderId: "468943959657",
  appId: "1:468943959657:web:697dce1e57d461998bd4f8",
  measurementId: "G-2H9YKTY2T2"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
