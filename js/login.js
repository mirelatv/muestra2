$(document).ready(function() {
  function loginwatcher() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('existe usuario activo');
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        console.log('no existe usuario reg');
        // ...
      }
    });
  }
  loginwatcher();
});