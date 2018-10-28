
export default class Words {

    constructor(text) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.fontSize = 15;
        this.ctx.font = `${this.fontSize}px Microsoft YaHei`;
        this.canvas.width = this.ctx.measureText(text).width;
        this.canvas.height = this.fontSize;
        this.ctx.fillStyle = 'red';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.font = `${this.fontSize}px Microsoft YaHei`;
        this.ctx.fillText(text, 0, -6);
        this.init();
    }

    init() {
        // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.getImage();
    }

    //将当前的文本转化为图片格式
    getImage() {
        const img = new Image();
        img.src = this.canvas.toDataURL('image/png');
        img.onload = () => {
            this.getImageData()
        };
        return img;
    }

    //将图片转换为imageData
    getImageData() {
        this.imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const data = [].slice.call(this.imageData.data);
        console.log(data)
        let r,g,b;
        for(let c=0; c<this.canvas.height; c++) {
            for(let r=0; r<this.canvas.width; r+=4) {
                
            }
        }
    }

    //获取文字的像素点坐标
    
}