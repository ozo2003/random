let timeout = (new URLSearchParams(location.search).get("timeout") || 60) * 1000;

let tick = 1;

$(document).ready(randomImage, timeout);

function randomImage() {
	getImage();

	setInterval(function() {
		getImage();
	}, timeout);
}

function getImage() {
	let width = viewportWidth();
	let height = viewportHeight();

	document.querySelector('meta[name=viewport]').setAttribute("content", "width=" + width + ",height=" + height + ",initial-scale=1");

	let seed = (Math.random() + 1).toString(36).substring(5);
	let image = "https://picsum.photos/" + seed + "/" + width + "/" + height + ".webp?" + tick;
	let image2 = "https://picsum.photos/" + seed + "/" + (width * 2) + "/" + (height * 2) + ".webp?" + tick;

	$("#img").attr("srcset", image + " 1x, " + image2 + " 2x");
	$("#img").attr("src", image);
	$("#img").attr("width", width);
	$("#img").attr("height", height);

	tick += 1;
}

function viewportWidth() {
	if (window.innerWidth) return window.innerWidth;
	var doc = document,
		html = doc && doc.documentElement,
		body = doc && (doc.body || doc.getElementsByTagName("body")[0]),
		getWidth = function(elm) {
			if (!elm) return 0;
			var setOverflow = function(style, value) {
					var oldValue = style.overflow;
					style.overflow = value;
					return oldValue || "";
				},
				style = elm.style,
				oldValue = setOverflow(style, "hidden"),
				width = elm.clientWidth || 0;
			setOverflow(style, oldValue);
			return width;
		};
	return Math.max(getWidth(html), getWidth(body));
}

function viewportHeight() {
	if (window.innerHeight) return window.innerHeight;
	var doc = document,
		html = doc && doc.documentElement,
		body = doc && (doc.body || doc.getElementsByTagName("body")[0]),
		getHeight = function(elm) {
			if (!elm) return 0;
			var setOverflow = function(style, value) {
					var oldValue = style.overflow;
					style.overflow = value;
					return oldValue || "";
				},
				style = elm.style,
				oldValue = setOverflow(style, "hidden"),
				height = elm.clientHeight || 0;
			setOverflow(style, oldValue);
			return height;
		};
	return Math.max(getHeight(html), getHeight(body));
}