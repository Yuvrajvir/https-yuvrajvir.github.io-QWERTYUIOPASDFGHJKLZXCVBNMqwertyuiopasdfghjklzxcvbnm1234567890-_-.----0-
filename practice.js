
const firebaseConfig = {
    apiKey: "AIzaSyBR2z_TY_v4onpOKm-ZAjsTVWmt9I0j2RE",
    authDomain: "bhudda-mail.firebaseapp.com",
    databaseURL: "https://bhudda-mail-default-rtdb.firebaseio.com",
    projectId: "bhudda-mail",
    storageBucket: "bhudda-mail.appspot.com",
    messagingSenderId: "344204299412",
    appId: "1:344204299412:web:b419aeb39a26a568017881",
    measurementId: "G-DT6DH6J830"
  };
  
 
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  } 