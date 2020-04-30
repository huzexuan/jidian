function ajax_tool(url, data, method, success) {
    var ajax = new XMLHttpRequest();
    if (method == 'get') {
        if (data) {
            url += '?';
            url += data;
        } else {

        }
        ajax.open(method, url);
        ajax.send();
    } else {
        //post请求不需要改变
        ajax.open(method, url);
        ajax.setRequestHeader("Content-type", "x-www-form-urlencoded");
        if (data) {
            ajax.send(data);
        } else {
            ajax.send();
        }
    }
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            //将数据让外边可以使用
            return ajax.responseText;
            // success(ajax.responseText);
        }
    }
}
(function($) {
    var re = /([^&=]+)=?([^&]*)/g,
        decodeRE = /\+/g,
        decode = function(str) { return decodeURIComponent(str.replace(decodeRE, " ")); };

    $.parseParams = function(query) {
        let params = {},
            e;

        while (e = re.exec(query)) params[decode(e[1])] = decode(e[2]);
        return params;
    };
})(jQuery);