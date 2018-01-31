export class PollFill {
    constructor() {

    }

    static deepAssign(target) {
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;
        var isObj = function(x) {
            var type = typeof x;
            return x !== null && (type === 'object' || type === 'function');
        }
        var toObject = function(val) {
            if (val === null || val === undefined) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            return Object(val);
        }
        var assignKey = function(to, from, key) {
            var val = from[key];
            if (val === undefined || val === null) {
                return;
            }
            if (hasOwnProperty.call(to, key)) {
                if (to[key] === undefined || to[key] === null) {
                    throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
                }
            }
            if (!hasOwnProperty.call(to, key) || !isObj(val)) {
                to[key] = val;
            } else {
                to[key] = assign(Object(to[key]), from[key]);
            }
        }

        var assign = function(to, from) {
            if (to === from) {
                return to;
            }

            from = Object(from);

            for (var key in from) {
                if (hasOwnProperty.call(from, key)) {
                    assignKey(to, from, key);
                }
            }

            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(from);

                for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                        assignKey(to, from, symbols[i]);
                    }
                }
            }

            return to;
        }

        target = toObject(target);

        for (var s = 1; s < arguments.length; s++) {
            assign(target, arguments[s]);
        }

        return target;
    }
}