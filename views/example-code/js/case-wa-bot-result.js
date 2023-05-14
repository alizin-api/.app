case 'google': {
	var q = args.join(" ")
	let result = await fetchJson(`http://alizindev.cleverapps.io/api/search/google?query=${q}&apikey=SUA_KEY`)
	results = ${result.result}
	reply(`${results}`)
	}
	break