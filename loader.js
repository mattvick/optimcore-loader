(function() {

  /**
   * get the user's account number from the URL of this script
   */
  var scripts = document.getElementsByTagName('script');
  var parser = document.createElement('a');
  parser.href = scripts[scripts.length-1].src;
  var matches = parser.search.match(/a=([^&]*)/);

  /**
   * basic validation
   */
  if (isNaN(matches[1]) {
    console.log('matches[1] is an integer');
    return;
  }

  /**
   * load experiment settings
   */
  document.write('<s'+'cript src="//www.optimcore.com/deploy/v1/settings.js?a='+matches[1]+'&url='+encodeURIComponent(document.URL)+'&random='+Math.random()+'" type="text/javascript">'+'<\/s'+'cript>');

  /**
   * load jQuery (if not already loaded)
   */
  if (typeof window.jQuery === "undefined") {
    document.write('<s'+'cript src="//code.jquery.com/jquery-1.4.2.min.js" type="text/javascript">'+'<\/s'+'cript>');
  }

  /**
   * load Optimcore
   */
  document.write('<s'+'cript type="text/javascript">if ("boolean" == typeof(_op_cor_settings_loaded)) { document.write(\'<s\'+\'cript src="//d3062rhc5ksps0.cloudfront.net/optcor_no_jquery.js" type="text/javascript">\'+\'<\/s\'+\'cript>\'); }<\/s'+'cript>');

  /**
   * initialise Optimcore
   */
  document.write('<s'+'cript type="text/javascript">if ("boolean" == typeof(_op_cor_settings_loaded) && "function" == typeof(_op_cor_top_initialize)) { _op_cor_top_initialize(); opc_$(document).ready(function() { _op_cor_bottom_initialize(); }); }<\/s'+'cript>');

})();