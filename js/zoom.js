/* function imgZoom(imgID, resultID) {
    let img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);

    lens = document.createElement('div');
    lens.setAttribute('class', 'img-zoom-lens');

    img.parentElement.insertBefore(lens, img);
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = `url('${img.src}')`;
    result.style.backgroundSize = (img.width * cx) + 'px' + (img.height * cy) + 'px';

    lens.addEventListener('mousemove', moveLens);
    img.addEventListener('mousemove', moveLens);

    lens.addEventListener('touchmove', moveLens);
    img.addEventListener('touchmove', moveLens);

    function moveLens(e) {
        let pos, x, y;
        pos = getCursorPos(e);
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth };
        if (x < 0) { x = 0; }
        if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight };
        if (y < 0) { y = 0; }
        lens.style.left = x + 'px';
        lens.style.top = y + 'px';
        result.style.backgroundPosition = '-' + (x * cx) + 'px -' + (y * cy) + 'px';
    }

    function getCursorPos(e) {
        let a, x = 0, y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
} */

const container = document.querySelector(".container")
const image = document.querySelector(".image")
const lens = document.querySelector(".lens")
const result = document.querySelector(".result")

const containerRect = container.getBoundingClientRect()
const imageRect = image.getBoundingClientRect()
const lensRect = lens.getBoundingClientRect()
const resultRect = result.getBoundingClientRect()

container.addEventListener("mousemove", zoomImage)

result.style.backgroundImage = `url(${image.src})`

function zoomImage(e) {
    const { x, y } = getMousePos(e)

    lens.style.left = x + "px"
    lens.style.top = y + "px"

    let fx = resultRect.width / lensRect.width
    let fy = resultRect.height / lensRect.height

    result.style.backgroundSize = `${imageRect.width * fx}px ${imageRect.height * fy
        }px`
    result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`
}

function getMousePos(e) {
    let x = e.clientX - containerRect.left - lensRect.width / 2
    let y = e.clientY - containerRect.top - lensRect.height / 2

    let minX = 0
    let minY = 0
    let maxX = containerRect.width - lensRect.width
    let maxY = containerRect.height - lensRect.height

    if (x <= minX) {
        x = minX
    } else if (x >= maxX) {
        x = maxX
    }
    if (y <= minY) {
        y = minY
    } else if (y >= maxY) {
        y = maxY
    }

    return { x, y }
}
