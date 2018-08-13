(function () {
	var TDYSDK = function () {
		this.version = "1.0";
		console.log(document.location.host);
		console.log(top.location.host);
		console.log('TDYSDK: ' + this.version);
	}
	TDYSDK.prototype = {
		postData: function (data) {
			top.postMessage(data, "*");
		},
		pay: function (prepay_id) {
			var data = {type: 'pay', data: {prepayId: prepay_id}};
			this.postData(JSON.stringify(data));
		}
	};
	window.TDYSDK = new TDYSDK();
})();
