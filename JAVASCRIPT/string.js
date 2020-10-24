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