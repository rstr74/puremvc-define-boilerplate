var utils = function() {};

utils.prototype.getTemplate = function(tmpl_name, callbk) {

    var tmpl_url = Application.TEMPLATE_DIRECTORY + '/' + tmpl_name + '.html';
    var req = this.createXMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState != 4) {
            return;
        } else {
            resp = req.response;
            callbk(resp);
            req.onreadystatechange = null;
        }

    };  

    req.open('get', tmpl_url, true);
    req.send(null);
};

utils.prototype.createXMLHttpRequest = function() {
    try {
        return new XMLHttpRequest();
    } catch(e) {
        console.log('Can\'t return new XMLHttpRequest');
    }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        console.log('Can\'t return new ActiveXObject');
    }
    console.log("XMLHttpRequest not supported");
    return null;
};

utils.prototype.getUuid = function() {
        var i, random,
            uuid = '';

        for ( i = 0; i < 32; i++ ) {
            random = Math.random() * 16 | 0;
            if ( i === 8 || i === 12 || i === 16 || i === 20 ) {
                uuid += '-';
            }
            uuid += ( i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random) ).toString( 16 );
        }
        return uuid;
};
