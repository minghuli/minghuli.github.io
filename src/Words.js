
export default class Words {

    constructor(text) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.fontSize = 16;
        this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.font = `${this.fontSize}px Microsoft YaHei`;
        this.ctx.fillText(text, 0, 0);
        // this.canvas.width = this.ctx.measureText(text).width;
        // this.canvas.height = this.fontSize;
        this.getImage()
        
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
        console.log(this.imageData)
    }

    //获取文字的像素点坐标
    
}