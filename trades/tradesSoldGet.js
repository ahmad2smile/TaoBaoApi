const getData = require("../dataService").getData
const { getTimeForZone } = require("../dateService")

let data = {
	app_key: "test",
	cid: 50011999,
	fields: "tid,type,status,payment,orders,rx_audit_status",
	format: "json",
	method: "taobao.trades.sold.get",
	session: "6101218cc8ec11f231240c3af01dcde3bc8332cc67bdcb42074082786",
	sign_method: "hmac",
	timestamp: getTimeForZone("Asia/Ulaanbaatar", "YYYY-MM-DD HH:mm:ss"),
	v: "2.0"
}

getData(data).then(
	res => console.log(res.data.trades_sold_get_response.trades),
	err => console.log(err.message)
)
