/**
 * write a script tag with source onto the document
 */
function _opCorLoadScript(src) {
    document.write('<s'+'cript src="'+src+'" type="text/javascript">'+'<\/s'+'cript>');
}

(function() {

    /**
     * Get the url of this script
     *
     * http://stackoverflow.com/questions/710957/how-might-i-get-the-script-filename-from-within-that-script#answer-710996
     */
    function _opCorGetScriptUrl() {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length-1].src;
    }

    /**
     * Get a url parameter by name
     *
     * http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript#answer-901144
     */
    function _opCorGetParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    /**
     * write a script tag with code onto the document
     */
    function _opCorAddScript(code) {
        document.write('<s'+'cript type="text/javascript">'+code+'<\/s'+'cript>');
    }

    var _op_cor_account_id = _opCorGetParameterByName('a', _opCorGetScriptUrl());

    if (typeof jQuery === "undefined") {
        _opCorLoadScript('https://code.jquery.com/jquery-1.4.2.min.js');
    }

    _opCorLoadScript('//www.optimcore.com/deploy/v1/settings.js?a='+_op_cor_account_id+'&url='+encodeURIComponent(document.URL)+'&random='+Math.random());
    // _opCorLoadScript('init.js');
    // _opCorLoadScript('run.js');

    // optcor
    document.write('<s'+'cript type="text/javascript">if ("boolean" == typeof(_op_cor_settings_loaded)) { _opCorLoadScript("//d3062rhc5ksps0.cloudfront.net/optcor.js"); }<\/s'+'cript>');

    // if ("boolean" == typeof(_op_cor_settings_loaded)) { document.write('<s'+'cript src="//d3062rhc5ksps0.cloudfront.net/optcor.js" type="text/javascript">'+'<\/s'+'cript>'); }

    // init
    document.write('<s'+'cript type="text/javascript">if ("boolean" == typeof(_op_cor_settings_loaded) && "function" == typeof(_op_cor_top_initialize)) { _op_cor_top_initialize(); opc_$(document).ready(function() { _op_cor_bottom_initialize(); });<\/s'+'cript>');  
}

})();