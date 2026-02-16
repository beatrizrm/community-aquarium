export class Fish {
    constructor(startX, startY, fishData, speciesData, scale, image) {
        this.id = fishData.id;
        this.x = startX;
        this.y = startY;
        this.image = image;
        this.width = image.width * scale;
        this.height = image.height * scale;

        const speed = Math.random() * (speciesData.maxSpeed - speciesData.minSpeed) + speciesData.minSpeed;
        this.speedX = speed * (Math.random() < 0.5 ? -1 : 1);
        this.speedY = (Math.random() * 1.5) - 0.75;

        this.maxRotation = speciesData.maxRotation;
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

    centerCanvas(ctx) {
        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2; 
        ctx.translate(centerX, centerY);
    }

    applyTransform(ctx) {
        let angle = Math.atan2(this.speedY, Math.abs(this.speedX));
        let clampedAngle = Math.max(-this.maxRotation, Math.min(this.maxRotation, angle));

        if (this.speedX < 0) {
            ctx.scale(-1, 1);
        }
        ctx.rotate(clampedAngle);
    }

    draw(ctx) {
        if (!this.image) return;
        ctx.save();

        this.centerCanvas(ctx);
        this.applyTransform(ctx);
        ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);  // draw at new center

        ctx.restore();
    }
}