## jsLoadr
Load page-specific JavaScript using HTML5 data attributes. This means that you can control loading JavaScript files from the HTML using non-intrusive, valid HTML5 attributes.

This does not deal with dependency issues and lazy-loading, it is simply for picking what scripts you need on each page. My all means, use this to fire off an asynchronous dependency manger script. I recommend [$script.js](https://github.com/ded/script.js).


## Basic Examples

In your HTML head, load jsLoadr and your own JavaScript file(s)
``` html
<script src="jsloadr.js"></script>
<script src="global.js"></script>
```

On the body element, add the data-js attribute and what script(s) you want loaded
``` html
<body data-js="jquery">
```

JavaScript
``` js
/*--- in your own js file, e.g. global.js ---*/
$jsloadr.load('jquery', function() {
	// Load jQuery
});
```


## Lazy Loading
If you name your file the same as the data-js
``` js
$jsloadr.lazy('dinosaur');
```
If the data-js contains 'dinosaur', this will load '/dinosaur.js'.

Your scripts are probably not in the root folder, so you can adjust this using two methods
``` js
// Load a script called dinosaur.js in the folder /assets/js
$jsloadr.lazy('dinosaur', '/assets/js/');

// Set the path, then load the script(s)
$jsloadr.path('/assets/js');
$jsloadr.lazy('dinosaur');
```
Remember, these will only load if you request them in the data-js.




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
```


Or if you know that your lightbox needs jQuery
``` html
<body data-js="lightbox">
```

``` js
$jsloadr.load('lightbox', function() {
	// Load jQuery first
	// Then load your lightbox.js script
});
```

This means that only your 'lightbox' JavaScript files would only be included on pages that needed them, by adding 'lightbox' to the data-js attribute.


## Using Dustin Diaz's [$script.js](https://github.com/ded/script.js)
``` html
<script src="script.js"></script>
<script>$script('global.js')</script>
```

``` html
<body data-js="lightbox">
```

``` js
/*--- in global.js ---*/
$script('jsloadr.js', 'jsloadr');
$script.ready('jsloadr', function() {

		// If the page has 'lightbox' in the data-js, fetch the needed files, otherwise do nothing
		$jsloadr.load('lightbox', function() {
		
			// Grab jQuery off a CDN
			$script('//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js', 'jquery');
			
			// Once you have jQuery, load your 'lightbox' JavaScript
			$script.ready('jquery', function() {
				$script('lightbox.js');
			});
		});
});
```


## Developer
* Conor MacNeill -  [thefella.com](http://thefella.com) | [@thefella](http://twitter.com/thefella)
	


	