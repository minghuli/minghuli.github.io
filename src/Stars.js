  /***  星星类
 * @param {*} ctx   
 * @param {*} width 
 * @param {*} height 
 * @param {*} count 
 */

export default class Stars {

    constructor(ctx, width, height, count) {
        this.context = ctx;
        this.width = width;
        this.height = height;
        this.count = count;
        this.stars = [];
        this.createStar();
        this.drow();
    }

    createStar() {
        let count = this.count;
        //随机生成星星的坐标和半径
        while(count--) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                r: Math.random() + 0.2
            });
        }
    }

    //改变星星的半径，让星星闪烁
    lighting() {
        this.stars = this.stars.map(function(star) {
            const n = Math.random() > 0.5 ? -1 : 1;
            star.r += n * 0.2;
            if(star.r < 0) {
                star.r = -star.r;
            } else if(star.r > 1) {
                star.r -= n * 0.2;
            }
            return star;
        })
        return this;
    }

    drow() {
        const ctx = this.context;
        ctx.save();
        ctx.fillStyle = 'white';
        this.stars.forEach(function(star) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI*2, false);
            ctx.fill(); 
            ctx.closePath()
        })
        ctx.restore();
        return this;
    }
    

}



