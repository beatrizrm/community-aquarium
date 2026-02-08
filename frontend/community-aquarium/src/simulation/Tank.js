// src/game/TankEngine.js
import { Fish } from "./Fish";
import { SPECIES_DATA } from "../data/speciesData";
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

    loadImages() {
        for (const speciesName in SPECIES_DATA) {
            const fishImg = new Image();
            fishImg.src = SPECIES_DATA[speciesName].sprite;
            this.loadedImages[speciesName] = fishImg;
        }
    }

    initFish() {
        for (const fishData of OWNED_FISH_DATA) {
            const startX = Math.random() * (this.canvas.width - 100);
            const startY = Math.random() * (this.canvas.height - 100);

            const speciesData = SPECIES_DATA[fishData.species];
            const img = this.loadedImages[fishData.species]

            this.fishObjs.push(new Fish(startX, startY, fishData, speciesData, img));
        }
    }

    start() {
        this.loadImages();
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