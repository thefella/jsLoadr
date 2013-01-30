/* ============================================================

jsLoadr.js by Conor MacNeill
Version: 1.0
URL: http://thefella.com
License: MIT

============================================================ */
(function ($jsloadr) {

	//! Set variables
	var doc = document, 
		head = doc.getElementsByTagName('head')[0],
		dataJs = doc.body.getAttribute('data-js'),
		scriptPath = ''
	
	//! Set path to scripts
	$jsloadr.path = function(sp) {
		scriptPath = sp
	}
	
	//! Main loading function
	$jsloadr.load = function(dep, fn) {
		if ( dataJs && (dataJs.indexOf(dep) !== -1) ) {
			fn();
		}
	}
	
	//! Lazy loading - guess / set path to script
	$jsloadr.lazy = function(dep, path) {
		if ( dataJs && (dataJs.indexOf(dep) !== -1) ) {
			p = path ? path : scriptPath;
			var el = doc.createElement('script');
			el.async = 1;
    		el.src = p+dep+'.js';
    		head.insertBefore(el, head.firstChild)	
		}
	}

}(this.$jsloadr = this.$jsloadr || {}));