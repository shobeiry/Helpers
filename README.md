# Helpers
Helpful helpers for programming languages

## JAVASCRIPT
Helpful javascript helpers

### number.js
this file contains number functions

|Function|Description|Example|
|--------|-----------|-------|
|rand()|generate random number in range|`rand(min, max)`|

### string.js
this file contains string functions

|Function|Description|Example|
|--------|-----------|-------|
|String.format()|format string|`"he{0}o wo{1}d {2}".format("ll", "rl", 1)`|
|uuidv4()|generate uuid v4|`uuid()`|

### util.js
this file contains useful functions

|Function|Description|Example|
|--------|-----------|-------|
|cookie|cookie management functions|`cookie.set('key','value'); let value = cookie.get('key', 'default value'); cookie.has('key');`|
|storage|storage management functions|`storage.set('key','value'); let value = storage.get('key', 'default value'); storage.has('key');`|
|foreach|foreach simulate for js|`foreach(items, function(item, index, items){ //do something })`|

## PHP
Helpful php helpers

### Minifier
minifier class for minify html, css or js.

|Function|Description|Example|
|--------|-----------|-------|
|html|minify html text|`Minifier::html($html);`|
|css|minify css text|`Minifier::css($css);`|
|javascript|minify javascript text|`Minifier::js($javascript);`|

### Str
this class contain string functions

|Function|Description|Example|
|--------|-----------|-------|
|truncate|truncating string to specific length|`Str::truncate($text,$length,'...',$isHtml);`|
|format|format string|`Str::format('Hllow %s %d.',"world", 1);`|

### Util
this class contain most usable functions

|Function|Description|Example|
|--------|-----------|-------|
|human_readable_size|convert bytes to human readable size like as 25GB|`Util::human_readable_size($bytes, $precision);`|