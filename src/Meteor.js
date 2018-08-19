/**
 * 流星类
 * @param {Object} ctx 
 * @param {Number} x 圆心的x坐标
 * @param {Number} h 画布的高度
 */

export default class Meteor {

    constructor(ctx, x, h) {
        this.ctx = ctx;
        this.x = x;
        this.y = 0;
        this.h = h;
        this.r = Math.random() * 100 + 500;
        this.vx = -(Math.random() * 4 + 2);
        this.vy = -this.vx;
    }

    drow() {
        const ctx = this.ctx;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.save();
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, Math.PI / 4, 5 * Math.PI / 4);
        ctx.lineTo(this.x + this.r, this.y - this.r);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    slide() {
        if(this.x < -this.r || this.y - this.r >= this.h) {
            return false;
        }
        this.x += this.vx;
        this.y += this.vy;
        return true;
    }

}



