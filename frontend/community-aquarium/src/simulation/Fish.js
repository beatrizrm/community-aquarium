export class Fish {
    constructor(startX, startY, fishData, speciesData, image) {
        this.id = fishData.id;
        this.x = startX;
        this.y = startY;
        this.image = image;
        this.width = image.width * speciesData.scale;
        this.height = image.height * speciesData.scale;

        const speed = Math.random() * (speciesData.maxSpeed - speciesData.minSpeed) + speciesData.minSpeed;
        this.speedX = speed * (Math.random() < 0.5 ? -1 : 1);
        this.speedY = (Math.random() * 1.5) - 0.75;
    }

    update(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Turn when hitting tank walls
        if (this.x + this.width > canvasWidth || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.height > canvasHeight || this.y < 0) {
            this.speedY *= -1;
        }
    }

    draw(ctx) {
        if (!this.image) return;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}