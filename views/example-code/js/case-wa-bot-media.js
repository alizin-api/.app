case 'randomcogan': {
    result = await getBuffer(`http://alizindev.cleverapps.io/api/cogan/random?apikey=SUA_KEY`)
    client.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
    }
    break