"use strict";
/**
 *
 * @param fn
 * @param args
 */
function curry(fn, args = []) {
    const len = fn.length;
    return function (...arg) {
        const newArg = args.concat(arg);
        if (newArg.length < len) {
            return curry.call(null, fn, newArg);
        }
        else {
            return fn(newArg);
        }
    };
}
