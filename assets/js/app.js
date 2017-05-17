/**
 * app
 */

/* Node modules */

/* Third-party modules */

/* Files */

(function () {
  $(function () {
    attachApp();
  });

  function setSidebarWrapper () {
    var wrapperWidth = $('#sidebar').parents('.sidebar-wrapper').width();

    console.log(wrapperWidth);

    $('#sidebar.affix').width(wrapperWidth);
  }

  function attachApp () {

    /* Trigger HLJS */
    hljs.initHighlightingOnLoad();

    // $(window).resize(setSidebarWrapper);
    // setSidebarWrapper();

    var affix = $('#sidebar').affix('checkPosition');

    affix.on('affixed.bs.affix');

  }

})();
