var firebaseConfig = {
      apiKey: "AIzaSyCysE3bsr-6VR7IIlpOgMxlMiCVMIvPzDI",
      authDomain: "kwitter-bf28e.firebaseapp.com",
      databaseURL:"https://kwitter-bf28e-default-rtdb.firebaseio.com",
      projectId: "kwitter-bf28e",
      storageBucket: "kwitter-bf28e.appspot.com",
      messagingSenderId: "901348411228",
      appId: "1:901348411228:web:4dc9506a30f22f83a6e399"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "addig room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";


}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}