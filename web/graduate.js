

requirejs(['jquery', 'lib/web3'],
  function ($, web3) {
    $(document).ready(function () {

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
