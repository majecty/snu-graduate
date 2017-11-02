

requirejs(['jquery', 'lib/web3', 'lib/Graduate', 'lib/queryParser', 'crypto-js/aes'],
  function ($, web3, graduate, queryParser, AES) {
    $(document).ready(function () {

      const queries = queryParser.parse();
      const fields = ['contract-address', 'student-name', 'student-id', 'student-password', 'student-email'];
      for (let i = 0; i < fields.length; i++) {
        const htmlId = fields[i];
        if (queries[htmlId]) {
          $(`#${htmlId}`).val(queries[htmlId]);
        }
      }
      $("#query-email").val(queries["student-email"]);

      $("#issue").click(function () {
        const name = $("#student-name").val();
        const id = $("#student-id").val();
        const password = $("#student-password").val();
        const email = $("#student-email").val()
        console.log("Issue clicked");
        console.log({
          name,
          id,
          password,
          email
        })
        const graduateInstance = graduate.get();
        const certificate = JSON.stringify({
          name, id
        });

        graduateInstance.issue(email, certificate, {
          from: web3.eth.accounts[0]
        }, function (err, transactionId) {
          console.log({
            log: "issue result",
            err, transactionId
          });

          alert(`Transaction success : ${transactionId}`);
        })
      });

      $("#verify").click(function () {
        const email = $("#query-email").val();
        console.log("verify clicked");
        console.log({
          email
        })
        const graduateInstance = graduate.get();

        graduateInstance.get.call(email, {
          from: web3.eth.accounts[0]
        }, function (err, transactionId) {
          console.log({
            log: "verify result",
            err, transactionId
          });

          alert(`Verify success : ${transactionId}`);
        })
      });

    })
  });
