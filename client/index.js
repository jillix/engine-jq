var $ = require("/libs/jquery");

exports.jq = function (ev, data) {
    data.args = data.args || [];
    $.fn[data.meth].apply($(data.selector), data.args);
};
