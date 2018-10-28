import Stars    from './Stars';
import Moon     from './Moon';
import Meteor   from './Meteor';

export default class Sky {

    constructor() {
        this.canvas = document.getElementById('starry-sky');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');
        this.START_COUNT = 600;
        this.moon = new Moon(this.context, this.width, this.height);
        this.stars = new Stars(this.context, this.width, this.height, this.START_COUNT);
        this.meteors = [];
        this.timer = [];
        this.moon.drow();
        this.stars.drow();
    }

    init() {
        let count = 0;
        const frame = () => {
            window.cancelAnimationFrame(this.timer);
            count++;
            count % 10 === 0 && this.stars.lighting();
            this.moon.drow();
            this.stars.drow();

            this.meteors.forEach((meteor, i) => {
                if (meteor.slide()) {
                    meteor.drow();
                } else {
                    this.meteors.splice(i, 1);
                }
            })
            if (count % 100 == 0 || count === 10) {
                const mx = Math.random() * this.width + 800;
                this.meteors.push(new Meteor(this.context, mx, this.height));
            }

            this.timer = window.requestAnimationFrame(frame);
        }
        frame();
    }

}

