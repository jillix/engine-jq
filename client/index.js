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
exports.jq = function (ev, data) {
    data.args = data.args || [];
    $.fn[data.meth].apply($(data.selector), data.args);
};
