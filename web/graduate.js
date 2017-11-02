

requirejs(['jquery', 'lib/web3', 'lib/Graduate', 'lib/queryParser'],
  function ($, web3, graduate, queryParser) {
    $(document).ready(function () {

      const queries = queryParser.parse();
      if (queries['contract-address']) {
        $('#contract-address').val(queries['contract-address']);
      }


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
        const graduateInstance = graduate.get();
      });
    })
  });
