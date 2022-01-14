const firebaseConfig = {
    apiKey: "AIzaSyABKgoK7MNusn3LHKUc-pvO3iELO5PsMMU",
    authDomain: "webntut-85fd8.firebaseapp.com",
    projectId: "webntut-85fd8",
    storageBucket: "webntut-85fd8.appspot.com",
    messagingSenderId: "939389244516",
    appId: "1:939389244516:web:74fbac378c8271611b7b71"
};
const app = firebase.initializeApp(firebaseConfig);

var TetrisBtn = document.getElementById("TetrisBtn");
var SignOutBtn = document.getElementById("SignOutBtn");

//俄羅斯方塊
TetrisBtn.addEventListener("click",function(){
    alert("準備好了嗎?");
    window.location.href="AdminTetris.html";
}, function(error) {
  	console.log("錯誤!");
})

//登出
SignOutBtn.addEventListener("click",function(){
	firebase
        .auth()
        .signOut()
        .then(() => {
            alert("已登出!");
            window.location.href="SignIn.html";
        }, function(error) {
  	        console.log("登出錯誤!");
	})
},false);