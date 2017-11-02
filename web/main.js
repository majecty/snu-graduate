
requirejs.config({
  baseUrl: '.',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    web3: './lib/web3.orig'
  }
});

// Start the main app logic.
requirejs(['jquery', 'graduate', 'web3'],
  function ($, graduate, web3) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    // console.log($);
  });
