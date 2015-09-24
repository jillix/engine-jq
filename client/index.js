// Dependencies
var $ = require("/libs/jquery");

/**
 * jq
 * Calls a jQuery method.
 *
 * @name jq
 * @function
 * @param {Event} ev The event object.
 * @param {Object} data An object containing the following fields:
 *
 *  - `sel` (String): The jQuery selector.
 *  - `meth` (String): The jQuery method to call.
 *  - `args` (Array): The method arguments (default: `[]`).
 *
 * @return {undefined}
 */
exports.jq = function (data) {
    data.args = data.args || [];
    $.fn[data.meth].apply($(data.sel), data.args);
};

/**
 * text
 *
 * @name text
 * @function
 * @param {Object} data An object contaning:
 *
 *  - `sel` (String): The jQuery selector.
 *  - `text` (String): The text to set.
 */
exports.text = function (data) {
    exports.jq({
        sel: data.sel
      , args: [data.text]
      , meth: "text"
    });
};

// Export the jQuery function itself
exports.$ = $;
