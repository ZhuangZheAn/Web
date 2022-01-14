const firebaseConfig = {
    apiKey: "AIzaSyABKgoK7MNusn3LHKUc-pvO3iELO5PsMMU",
    authDomain: "webntut-85fd8.firebaseapp.com",
    projectId: "webntut-85fd8",
    storageBucket: "webntut-85fd8.appspot.com",
    messagingSenderId: "939389244516",
    appId: "1:939389244516:web:74fbac378c8271611b7b71"
};
const app = firebase.initializeApp(firebaseConfig);
var adminID = "admin@admin.com";
var adminPWD = "admin1";
var signInID = document.getElementById("signInID");
var signInPWD = document.getElementById("signInPWD");
var SignInBtn = document.getElementById("SignInBtn");

//登入
SignInBtn.addEventListener("click",function(){
	console.log(signInID.value);
	firebase
    .auth()
    .signInWithEmailAndPassword(signInID.value, signInPWD.value)
    .then(() => {
        if (signInID.value == adminID){
            alert("已登入管理員模式!");
            window.location.href="./html/AdminMain.html";
            
        }
        else{
            window.location.href="./html/Main.html";
        }
    })
    .catch((error) => {
        alert(error.message);
    });
},false);