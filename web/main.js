requirejs.config({
  baseUrl: '.',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery'
  }
});

// Start the main app logic.
requirejs(['jquery', 'graduate'],
  function ($, graduate) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log($);
  });
