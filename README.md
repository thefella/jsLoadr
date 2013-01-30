## jsLoadr
Load page-specific JavaScript using HTML5 data attributes. This means that you can control loading JavaScript files from the HTML using non-intrusive, valid HTML5 attributes.


## Basic Examples

Head
``` html
<script src="jsloadr.js"></script>
```

Body
``` html
<body data-js="jquery">
```

JavaScript
``` js
$jsloadr.load('jquery', function() {
	// Load jQuery
});
```


### More Examples
``` html
<body data-js="jquery lightbox">
```

``` js
$jsloadr.load('jquery', function() {
	// Load jQuery
});

$jsloadr.load('lightbox', function() {
	// Load your lightbox.js script
});
'''

This means that only your 'lightbox' JavaScript files would only be included on pages that needed them, buy adding 'lightbox' to the data-js attribute.
	


	