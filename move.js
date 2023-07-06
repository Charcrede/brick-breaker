'use strict'
import { display } from "./display.js";
import { collision } from "./collision.js";
import { game } from "./main.js";
import { ball } from "./main.js";
import { ctx } from "./main.js";
export{ rafId}
let rafId;
function move() {
    ball.y += 6 * ball.sens.y;
    ball.x += 6 * ball.sens.x;
    display();
    collision();
    rafId = requestAnimationFrame(move);
    if (ball.y <= ball.radius) {
        ball.sens.y *= -1;
    }
    else if (ball.y + ball.radius >= game.height) {
        game.gameOver = true
    }
    if (game.gameOver === true) {
        cancelAnimationFrame(rafId);
        ctx.fillStyle = "red";
        ctx.font = " bold 100px Verdana";
        ctx.fillText("Game Over", (game.width - ctx.measureText("Game Over").width) / 2, 295)
    }
    if (ball.x <= ball.radius || ball.x + ball.radius >= canvas.width) {
        ball.sens.x *= -1;
    }
}
export {move}