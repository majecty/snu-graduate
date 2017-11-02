

requirejs(['jquery'],
  function ($) {
    $(document).ready(function () {
      console.log("HI");

      $("#issue").click(function () {
        const name = $("#student-name").val();
        const id = $("#student-id").val();
        const password = $("#student-password").val();
        console.log("Issue clicked");
        console.log({
          name,
          id,
          password
        })
      });
    })
  });
