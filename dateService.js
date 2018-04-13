const moment = require("moment")
const momentTz = require("moment-timezone")

/**
 *
 *
 *
 * returns a Local DateTime String in the format of 'YYYY-MM-DD HH:mm:ss'
 * @returns {Date}
 */
module.exports.getLocalDateTime = function() {
	return moment().format("YYYY-MM-DD HH:mm:ss")
}

/**
 *
 *
 *
 * returns a Local Date String in the format of '12:45 PM'
 * @returns {Date}
 */
module.exports.getLocalTime = function(format = "hh:mm A") {
	return moment().format(format)
}

/**
 *
 *
 * @param {String} tz Moment time zone string
 * @param {String} format (optional)
 * returns a Specific Timezone Date String in the format of '12:45 PM'
 * @returns {Date}
 */
module.exports.getTimeForZone = function(tz, format = "hh:mm A") {
	return tz
		? momentTz(moment())
				.tz(tz)
				.format(format)
		: moment().format(format)
}
