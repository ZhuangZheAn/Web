// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABKgoK7MNusn3LHKUc-pvO3iELO5PsMMU",
    authDomain: "webntut-85fd8.firebaseapp.com",
    projectId: "webntut-85fd8",
    storageBucket: "webntut-85fd8.appspot.com",
    messagingSenderId: "939389244516",
    appId: "1:939389244516:web:74fbac378c8271611b7b71"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var $createForm = $("#createForm");
var $Score = $("#Score");
var $Comment = $("#Comment");
var $Name = $("#Name");
var BackBtn = document.getElementById("BackBtn");

$createForm.submit(function (e){
    //prevent default behavior of borwser
    e.preventDefault();
    console.log("New Tag Form Submitted !");
    const tag = {
        Score: $Score.val(),
        Comment: $Comment.val() 
    }
    //Add tag to taglist collection
    var Now = new Date().toUTCString();
    db.collection("CommentList")
    .doc(Now)
    .set({
        Name: $Name.val(),
        Score: $Score.val(),
        Comment: $Comment.val() 
    })
    .then(() => {
        window.location.reload();
    })
    .catch(err => console.log(err));
});
// Start your scripts here...
db
    .collection("CommentList")
    .get()
    .then(docList => {
        docList.forEach(doc => {
            const product = doc.data();
            const col = `
            ${product.Name}   
            <li class="list-group-item">
                ${product.Comment}
            </li> 
            `;
            // Select an Element from web page
            // with an id="productList" 
            $("#CommentList").append(col)
        })
    })
    // If some error happened
    // .catch( function(err){} )
    .catch(err => {
        console.log("[err]", err);
    });


//返回
BackBtn.addEventListener("click",function(){
    window.location.href="Main.html";
}, function(error) {
  	console.log("錯誤!");
})


