/**
 * app
 */

/* Node modules */

/* Third-party modules */

/* Files */

(function () {

  /* Initialize HighlightJS */
  hljs.initHighlightingOnLoad();

  /* Get the child nav */
  $('#site-content h3').each(function (key, value) {
    var id = $(value).attr('id');
    var name = $(value).text();

    $('#sidebar-child ul').append('<li><a href="#' + id + '">' + name + '</a></li>');
  });

})();
