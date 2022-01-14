const firebaseConfig = {
    apiKey: "AIzaSyABKgoK7MNusn3LHKUc-pvO3iELO5PsMMU",
    authDomain: "webntut-85fd8.firebaseapp.com",
    projectId: "webntut-85fd8",
    storageBucket: "webntut-85fd8.appspot.com",
    messagingSenderId: "939389244516",
    appId: "1:939389244516:web:74fbac378c8271611b7b71"
};
const app = firebase.initializeApp(firebaseConfig);

var signUpID = document.getElementById("signUpID");
var signUpPWD = document.getElementById("signUpPWD");
var ChecksignUpPWD = document.getElementById("ChecksignUpPWD");
var SignUpBtn = document.getElementById("SignUpBtn");

//註冊
SignUpBtn.addEventListener("click", function (e) {
    if (signUpPWD.value == ChecksignUpPWD.value){
        firebase
        .auth()
        .createUserWithEmailAndPassword(signUpID.value, signUpPWD.value)
        .then(() => {
            alert("註冊成功!");
            window.location.href="../SignIn.html";
        })
        .catch((error) => {
            alert(error.message);
        });
    } 
    else {
        alert("密碼不一致");
    }
});
