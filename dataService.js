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

function getSeller() {
	// ascending sort is required for Hash gen
	// partner_id: "apidoc",
	let data = {
		app_key: "test",
		cid: 50011999,
		fields: "product_id,outer_id",
		format: "json",
		method: "taobao.products.search",
		session: "6101218cc8ec11f231240c3af01dcde3bc8332cc67bdcb42074082786",
		sign_method: "hmac",
		timestamp: getTimeForZone("Asia/Ulaanbaatar", "YYYY-MM-DD HH:mm:ss"),
		v: "2.0"
	}

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
getSeller().then(
	res => console.log(res.data.products_search_response.products.product),
	err => console.log(err.message)
)
