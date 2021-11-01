function initFirebase() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $(".pName").css("display", "block");
    } else {
      console.log("user is not there");
      $(".pName").css("display", "none");
      _db = "";
    }
  });
}

function createUser() {
  let password = $("#signup-pass").val();
  let email = $("#signup-email").val();
  let fName = $("#fname").val();
  let lName = $("#lname").val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}

function loginUser() {
  let password = $("#login-pass").val();
  let email = $("#login-email").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log("Logged in!");
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function login() {
  $(".login-toggle").on("click", () => {
    $(".hamburger-menu").toggle();
    $(".login-wrapper").toggle();
    $("footer").toggle();
    $(".navBar").toggle();
    $(".login-toggle").toggle();

    console.log("HELLLOOOOOO");
  });
}

function exit() {
  $(".exit").on("click", () => {
    $(".hamburger-menu").toggle();
    $(".login-wrapper").toggle();
    $("footer").toggle();
    $(".navBar").toggle();
    $(".login-toggle").toggle();

    console.log("HELLLOOOOOO");
  });
}

$(document).ready(() => {
  login();
  exit();
  try {
    let app = firebase.app();
    initFirebase();
    initListener();
  } catch {
    console.error(e);
  }

  //   console.log("HELLLOOOOOO");
});
