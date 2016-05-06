(function() {

    function _opCorGetParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function _opCorLoadScript (src) {
      document.write('<s'+'cript src="'+src+'" type="text/javascript">'+'<\/s'+'cript>');
    }

    var _op_cor_account_id = _opCorGetParameterByName('a');

    if (typeof jQuery === "undefined") {
        _opCorLoadScript('https://code.jquery.com/jquery-1.4.2.min.js');
    }

    _opCorLoadScript('//www.optimcore.com/deploy/v1/settings.js?a='+_op_cor_account_id+'&url='+encodeURIComponent(document.URL)+'&random='+Math.random());
    _opCorLoadScript('init.js');
    _opCorLoadScript('run.js');

})();