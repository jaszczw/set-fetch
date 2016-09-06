var config = require('./config.json');
var rp = require('request-promise');

module.exports = function (setId) {
	var uri = '';
	var options = {
    	uri: 'https://rebrickable.com/api/get_set',
    	qs: {
    		format: 'json',
    		key : config.apiKey,
    		set_id: setId
    	},
	    headers: {
	        'User-Agent': 'Request-Promise'
	    },
    	json: true
	};

	return rp(options)
		.then((results) => {
			var result = results.pop();
			console.log(results);
			return {
				pieces: result.pieces,
				description: result.descr,
				theme : result.theme
			};
		})
		.catch(()=> {
			console.log('There was an error fetching set', setId, 'from rebrickable');
		});
};