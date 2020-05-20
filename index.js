let timeout = (new URLSearchParams(location.search).get("timeout") || 60) * 1000;

let tick = 1;

$(document).ready(randomImage, timeout);

function randomImage() {
    getImage();

    setInterval(function () {
        getImage();
    }, timeout);
}

function getImage() {
    let image = "https://picsum.photos/" + viewportWidth() + "/" + viewportHeight() + ".webp?" + tick;
    $("#img").attr("src", image);
    tick += 1;
}

function viewportWidth() {
    if (window.innerWidth) return window.innerWidth;
    var doc = document,
        html = doc && doc.documentElement,
        body = doc && (doc.body || doc.getElementsByTagName("body")[0]),
        getWidth = function (elm) {
            if (!elm) return 0;
            var setOverflow = function (style, value) {
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
        getHeight = function (elm) {
            if (!elm) return 0;
            var setOverflow = function (style, value) {
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
