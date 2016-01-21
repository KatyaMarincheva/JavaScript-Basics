// custom cylinder drawing function
function drawCylinder(ctx, x, y, w, h) {
    'use strict';
    var i, xPos, yPos, pi = Math.PI, twoPi = 2 * pi;

    ctx.beginPath();

    for (i = 0; i < twoPi; i += 0.001) {
        xPos = (x + w / 2) - (w / 2 * Math.cos(i));
        yPos = (y + h / 8) + (h / 8 * Math.sin(i));

        if (i === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    }
    ctx.moveTo(x, y + h / 8);
    ctx.lineTo(x, y + h - h / 8);

    for (i = 0; i < pi; i += 0.001) {
        xPos = (x + w / 2) - (w / 2 * Math.cos(i));
        yPos = (y + h - h / 8) + (h / 8 * Math.sin(i));

        if (i === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    }
    ctx.moveTo(x + w, y + h / 8);
    ctx.lineTo(x + w, y + h - h / 8);

    ctx.fillRect(x, x-86, 60, 60);

    ctx.fill();
    ctx.stroke();
}