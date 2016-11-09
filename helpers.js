/**
 * Created by Zaur_Ismailov on 8/24/2016.
 */
var path = require('path');
var _root = path.resolve(__dirname, './firebase');
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}
exports.root = root;