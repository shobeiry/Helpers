if (!String.prototype.format) {
    String.prototype.format = function () {
        /**
         * string format
         *
         * @example let temp = "hello {0}{1}.".format("wor", "ld") // temp == "hello world."
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
