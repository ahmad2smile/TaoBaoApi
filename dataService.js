const axios = require("axios")
const md5 = require("crypto-js/md5")
const md5Hmac = require("crypto-js/hmac-md5")
const querystring = require("querystring")
const { getTimeForZone } = require("./dateService")

const appBaseUrl = "http://gw.api.tbsandbox.com"

const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 15000,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
	}
})

module.exports.getData = function(data) {
	// ascending sort is required for Hash gen
	// partner_id: "apidoc",

	const app_secret = "test"
	const values = Object.values(data)
	const dataStr = Object.keys(data)
		.map((key, index) => key + values[index])
		.join("")

	// data.sign = md5(app_secret + dataStr + app_secret)
	// 	.toString()
	// 	.toUpperCase()
	data.sign = md5Hmac(dataStr, app_secret)
		.toString()
		.toUpperCase()

	console.log("\n")
	console.log(data)
	console.log("\n")
	console.log("------------- OUTPUT START ------------\n")

	return api.post("/router/rest", querystring.stringify(data))
}

process.stdout.write("\x1Bc")

console.log("------------- INPUT START ------------")
