(function () {
	var TDYSDK = function() {
		this.version = "1.0";
		console.log('TDYSDK: ' + this.version);
		console.log(top);
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
