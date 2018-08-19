/**
 * 月亮类
 * @param {Object} ctx 
 * @param {Number} width  画布宽度 
 * @param {Number} height 画布高度
 */

 export default class Moon {

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    drow() {
        const ctx = this.ctx;
        const gradient = ctx.createRadialGradient(150, 150, 60, 150, 150, 800)
            gradient.addColorStop(0, 'rgb(255, 255, 255)');
            gradient.addColorStop(0.01, 'rgb(91, 125, 164)');
            gradient.addColorStop(0.2, 'rgb(27, 74, 127)');
            
            // gradient.addColorStop(0.01, 'rgb(70, 70, 80)');
            // gradient.addColorStop(0.2, 'rgb(40,40,50)');
            // gradient.addColorStop(0.4, 'rgb(20,20,30)');
            // gradient.addColorStop(1, 'rgb(0,0,10)');

            gradient.addColorStop(0.4, 'rgb(1, 42, 88)');
            gradient.addColorStop(1, 'rgb(2, 30, 67)');

        ctx.save();
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.restore();
    }

 }
