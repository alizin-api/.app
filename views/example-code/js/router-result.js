router.get('/search/youtube', async(req, res, next) => {
	var q = req.query.q
	
	let fetch = require('node-fetch')
	fetch(encodeURI(`http://alizindev.cleverapps.io/api/search/google?query=${q}&apikey=SUA_KEY`))
	.then(response => response.json())
	.then(ress => {
		var result = ress;
		res.json({
			result
			})
		})
	})
})