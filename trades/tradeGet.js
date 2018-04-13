const getData = require("../dataService").getData
const { getTimeForZone } = require("../dateService")

let data = {
	app_key: "test",
	fields: "tid,type,status,payment,orders",
	format: "json",
	method: "taobao.trade.get",
	session: "61000209aac7ab893846e7575fd3164f535f40c878b9b932074082786",
	sign_method: "hmac",
	tid: 192349066561286,
	timestamp: getTimeForZone("Asia/Ulaanbaatar", "YYYY-MM-DD HH:mm:ss"),
	v: "2.0"
}

getData(data).then(res => console.log(res.data), err => console.log(err.message))
