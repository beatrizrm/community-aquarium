import { Fish } from "./Fish";
import { SPECIES_DATA } from "../data/speciesData";
import { VARIANT_DATA } from "../data/variantData";
import { OWNED_FISH_DATA } from "../data/fishData";

export class Tank {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.fishObjs = [];
        this.loadedImages = {};
        this.animationId = null;
        
        this.loop = this.loop.bind(this);   // Needed for weird js 'this' handling (so it can memorize that this = tank for this.fishObjs)
    }

    async loadImages() {    // returns a promise
        const promises = [];

        for (const variantName in VARIANT_DATA) {
            const fishImg = new Image();
            fishImg.src = VARIANT_DATA[variantName].sprite;
            this.loadedImages[variantName] = fishImg;

            promises.push(new Promise(resolve => fishImg.addEventListener("load", resolve)));
        }

        await Promise.all(promises);    // to determine fish dimensions
    }

    initFish() {
        for (const fishData of OWNED_FISH_DATA) {
            const variantData = VARIANT_DATA[fishData.variant];
            const speciesData = SPECIES_DATA[variantData.species];
            const img = this.loadedImages[fishData.variant]

            const fishW = img.width * variantData.scale;
            const fishH = img.height * variantData.scale;
            const maxX = this.canvas.width - fishW;
            const maxY = this.canvas.height - fishH;

            const startX = Math.random() * Math.max(0, maxX);
            const startY = Math.random() * Math.max(0, maxY);

            this.fishObjs.push(new Fish(startX, startY, fishData, speciesData, variantData.scale, img));
        }
    }

    async start() {
        await this.loadImages();
        this.initFish();

        if (!this.animationId) {
            this.loop();
        }
    }

    stop() {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
    }

    loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const fish of this.fishObjs) {
            fish.update(this.canvas.width, this.canvas.height);
            fish.draw(this.ctx);
        }

        this.animationId = requestAnimationFrame(this.loop);
    }
}