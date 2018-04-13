const getData = require("../dataService").getData
const { getTimeForZone } = require("../dateService")

let data = {
	app_key: "test",
	cid: 50011999,
	fields: "product_id,name,pic_url,cid,props,price,tsc",
	format: "json",
	method: "taobao.products.search",
	session: "6101218cc8ec11f231240c3af01dcde3bc8332cc67bdcb42074082786",
	sign_method: "hmac",
	timestamp: getTimeForZone("Asia/Ulaanbaatar", "YYYY-MM-DD HH:mm:ss"),
	v: "2.0"
}

getData(data).then(
	res => console.log(res.data.products_search_response.products.product),
	err => console.log(err.message)
)
