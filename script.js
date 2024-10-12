$(document).ready(function () {
  // Menyembunyikan alert saat awal awal / sebelum click button Login
  $(".custom-alert").hide();

  // Function untuk menampilkan username pada alert
  function showAlert(username) {
    $(".alert-username").text(username);
    $(".custom-alert").fadeIn();
  }

  // Function jika icon X di tekan maka alert akan menghilang
  function hideAlert() {
    $(".custom-alert").fadeOut();
  }

  $(".login-form").on("submit", function (event) {
    event.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    // Memeriksa apakah username / password sudah terisi
    if (username && password) {
      showAlert(username);
    } else {
      alert("Please fill in both username and password!");
    }
  });

  // Jika click icon X, maka alert akan menghilang
  $(".close-alert").on("click", function () {
    hideAlert();
  });
});