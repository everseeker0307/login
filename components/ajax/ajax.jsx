import jQuery from 'jquery';

const Ajax = {
	jget(url, func) {
		jQuery.ajax({
			type: 'GET',
			url: url,
			data: null,
			dataType: 'json',
			success: data => {
				func(data);
			},
		});
	},

	jpost(url, data, func) {

	},

	get(url, func) {
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.onreadystatechange = function() {
			if (request.readyState === 4 && func) 
				func(request.response);
		};
		request.send(null);
	},

	post(url, data, func) {
		var request = new XMLHttpRequest();
		request.open('POST', url);
		request.onreadystatechange = function() {
			if (request.readyState === 4 && func) {
				func(request.response);
			}
		};
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(data));
	},
}

export default Ajax;