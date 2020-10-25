// cookie manager
let cookie = {
    /**
     * get cookie
     *
     * @param name: cookie name
     * @return cookie value
     **/
    get: function (name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    },
    /**
     * set cookie
     *
     * @param name: cookie name
     * @param value: cookie value
     * @param expire_by_min: cookie expire minutes
     * @param path: cookie path
     **/
    set: function (name, value, expire_by_min = 30, path = '/') {
        let expires = "";
        if (expire_by_min) {
            let date = new Date();
            date.setTime(date.getTime() + (expire_by_min * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        if (path) {
            path = '; path=' + path
        }
        document.cookie = name + "=" + (value || "") + expires + path;
    }
}

// storage manager
let storage = {
    /**
     * get from storage
     *
     * @param key: key of storage
     * @param default_value: returned when storage value not exists
     *
     * @return storage value if exiting
     **/
    get: function (key, default_value) {
        if (typeof window.localStorage[key] === 'undefined') {
            return (default_value ? default_value : "");
        } else {
            return JSON.parse(window.localStorage[key]);
        }
    },
    /**
     * set from storage
     *
     * @param key: key of storage
     * @param value: value of storage
     *
     * @return void
     **/
    set: function (key, value) {
        window.localStorage[key] = JSON.stringify(value);
    },
    /**
     * check storage
     *
     * @param key: key of storage
     *
     * @return boolean: storage data exists or no
     **/
    has: function (key) {
        return typeof window.localStorage[key] !== 'undefined';
    }
}

let foreach = function (items, func) {
    /**
     * foreach
     *
     * @example let items = document.querySelectorAll('.items'); foreach(items, function(item, index, items){ console.log(item, index, items); })
     *
     * @param items: items for foreach
     * @param func: function for send items into it
     *
     * @return void
     **/
    if (items instanceof HTMLElement) {
        return func(items, 0, items);
    } else if (items.forEach) {
        items.forEach((item, index, items) => func(item, index, items))
    } else {
        for (let item in items) {
            func(items[item], item, items);
        }
    }
}