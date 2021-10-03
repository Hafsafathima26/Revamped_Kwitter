
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDQJO5rjDZzaqHRtPXIfgewSM2pvx7knGA",
      authDomain: "kwitter-376b1.firebaseapp.com",
      projectId: "kwitter-376b1",
      storageBucket: "kwitter-376b1.appspot.com",
      messagingSenderId: "164635659107",
      appId: "1:164635659107:web:1aaff7924172f43b3e6156"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
