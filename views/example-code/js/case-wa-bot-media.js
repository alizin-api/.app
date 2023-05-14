case 'randomcogan': {
    result = await getBuffer(`http://alizindev.cleverapps.io/api/cogan/random?apikey=free`)
    client.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
    }
    break
