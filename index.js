const timeout = (new URLSearchParams(window.location.search).get("timeout") || 60) * 1000;

let tick = 1;

document.addEventListener("DOMContentLoaded", function () {
    getImage();
    setInterval(getImage, timeout);
});

function getImage() {
    const width = viewportWidth();
    const height = viewportHeight();

    document.querySelector('meta[name=viewport]').setAttribute("content", "width=" + width + ",height=" + height + ",initial-scale=1");

    const seed = (Math.random() + 1).toString(36).substring(5);
    const image1x = "https://picsum.photos/seed/" + seed + "/" + width + "/" + height + ".webp?" + tick;

    let imgElement = document.getElementById("img");
    imgElement.src = image1x;

    const image2x = "https://picsum.photos/seed/" + seed + "/" + (width * 2) + "/" + (height * 2) + ".webp?" + tick;
    imgElement.srcset = image1x + " 1x, " + image2x + " 2x";

    imgElement.width = width;
    imgElement.height = height;

    tick += 1;
}

function viewportWidth() {
    if (window.innerWidth) return window.innerWidth;

    let doc = document, html = doc && doc.documentElement,
        body = doc && (doc.body || doc.getElementsByTagName("body")[0]), getWidth = function (elm) {
            if (!elm) return 0;
            let setOverflow = function (style, value) {
                let oldValue = style.overflow;
                style.overflow = value;
                return oldValue || "";
            }, style = elm.style, oldValue = setOverflow(style, "hidden"), width = elm.clientWidth || 0;
            setOverflow(style, oldValue);

            return width;
        };

    return Math.max(getWidth(html), getWidth(body));
}

function viewportHeight() {
    if (window.innerHeight) return window.innerHeight;

    let doc = document, html = doc && doc.documentElement,
        body = doc && (doc.body || doc.getElementsByTagName("body")[0]), getHeight = function (elm) {
            if (!elm) return 0;
            let setOverflow = function (style, value) {
                let oldValue = style.overflow;
                style.overflow = value;
                return oldValue || "";
            }, style = elm.style, oldValue = setOverflow(style, "hidden"), height = elm.clientHeight || 0;
            setOverflow(style, oldValue);

            return height;
        };

    return Math.max(getHeight(html), getHeight(body));
}
