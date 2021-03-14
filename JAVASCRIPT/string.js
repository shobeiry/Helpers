if (!String.prototype.format) {
    String.prototype.format = function () {
        /**
         * string format
         *
         * @example let temp = "hello {0}{1}.".format("wor", "ld") // temp is "hello world."
         **/
        let args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

if (!String.prototype.contains) {
    String.prototype.contains = function (text) {
        /**
         * string check contains another string
         *
         * @example let temp = "hello world.".contains("llo") // temp is true
         **/
        return this.indexOf(text) !== -1;
    };
}

if (!String.prototype.f) {
    String.prototype.f = function () {
        /**
         * string format
         *
         * @example let temp = "hello {0}{1}.".format("wor", "ld") // temp is "hello world."
         **/
        return this.format(arguments);
    };
}

if (!String.prototype.isUUID) {
    String.prototype.isUUID = function () {
        /**
         * check string is valid uuid
         *
         * @example let temp = "33ec9804-932d-48bf-87d7-175916830655".isUUID() // temp is true
         **/
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(this);
    };
}

if (!String.prototype.isNumeric) {
    String.prototype.isNumeric = function () {
        /**
         * check string is numeric
         *
         * @example let temp = "2021".isNumeric() // temp is true
         **/
        let str = this;
        if (typeof str != "string") return false // we only process strings!
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    };
}

if (!String.prototype.isIP) {
    String.prototype.isIP = function () {
        /**
         * check string is valid ip
         *
         * @example let temp = "192.168.1.1".isIP() // temp is true
         **/
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this);
    };
}

if (!String.prototype.isEmail) {
    String.prototype.isEmail = function () {
        /**
         * check string is valid email
         *
         * @example let temp = "example@info.com".isEmail() // temp is true
         **/
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this);
    };
}

function uuidv4() {
    /**
     * generate uuid
     *
     * @return string: uuid string
     **/
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
