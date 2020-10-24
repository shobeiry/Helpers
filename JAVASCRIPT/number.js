/**
 * random number in range
 *
 * @example rand(0, 100);
 *
 * @param min: minimum of range
 * @param max: maximum of range
 *
 * @return random number
 **/
function rand(min, max) {
    if (typeof min == 'undefined' && typeof max != 'undefined') {
        min = 1;
    }
    return Math.floor((Math.random() * max) + min);
}