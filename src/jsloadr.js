/* ============================================================

jsLoadr.js by Conor MacNeill
Version: 1.0
URL: http://thefella.com
License: MIT

============================================================ */
(function ($jsloadr) {

	var doc = document, 
		dataJs = doc.body.getAttribute('data-js')
		
	$jsloadr.load = function(dep, fn) {
		if ( dataJs && (dataJs.indexOf(dep) !== -1) ) {
			fn();
		}
	}

}(this.$jsloadr = this.$jsloadr || {}));