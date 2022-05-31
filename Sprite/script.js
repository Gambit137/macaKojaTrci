const SPRITE_WIDTH = 220;
const SPRITE_HEIGHT = 150;
const BORDER_WIDTH = 1;
const SPACING_WIDTH = 1;

function spritePositionToImagePosition(row, col) {
    return {
        x: (
            BORDER_WIDTH +
            col * (SPACING_WIDTH + SPRITE_WIDTH)
        ),
        y: (
            BORDER_WIDTH +
            row * (SPACING_WIDTH + SPRITE_HEIGHT)
        )
    }
}

var canvas = document
            .querySelector('canvas');
var context = canvas
            .getContext('2d');

var image = new Image();
image.src = "https://i.imgur.com/Idp7vVA.jpeg";
image.crossOrigin = "anonymous";

var row = 0;
var col = 0;

function animate() {
    if (col === 3) {
        col = 0;
        row += 1;
    }
    if (row === 2) {
        row = 0;
    }
    var position = spritePositionToImagePosition(row, col);
    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
    context.drawImage(
        image,
        position.x,
        position.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        0,
        0,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
    col += 1;
}

image.onload = function() {
    setInterval(animate, 500);
};