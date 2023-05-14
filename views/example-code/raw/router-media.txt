router.get('/cogan/random', async (req, res, next) => {
    var result = {
    url: `http://alizindev.cleverapps.io/api/cogan/random?apikey=SUA_KEY`, method: 'GET', encoding: null };
    request(result, function(error, response, body) {
    res.set('Content-Type', 'image/png');
    res.send(body)
    })
    })