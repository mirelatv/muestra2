$(document).ready(function() {
  setTimeout(function() {
    $('body').fadeOut(1000, function() {
      $(location).attr('href', 'views/login.html');
    });
  }, 2000);
});