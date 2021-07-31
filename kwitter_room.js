  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBAcIg5n0_kwr-38yirxNoHmzoRiP64XC0",
    authDomain: "kwitter-app-project-faa6e.firebaseapp.com",
    projectId: "kwitter-app-project-faa6e",
    storageBucket: "kwitter-app-project-faa6e.appspot.com",
    messagingSenderId: "312932985781",
    appId: "1:312932985781:web:af0ca287dc1768d0f3c7fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    
    function addroom(){
        function getData() {firebase.database().ref("/").on('value',
        function(snapshot) {document.getElementById("output").innerHTML =
        "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        row="<div class='room_name' id="+ Room_names +" onclick='redirecttoRoomName(this.id)'>#"+Room_names+"</div><hr>";
        //End code
        });});}
        getData();
    }