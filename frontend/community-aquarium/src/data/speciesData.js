// You'll replace these paths with your real images later
import tetraSprite from '../assets/images/fish/neontetra.gif';
import angelfishSprite from '../assets/images/fish/angelfish.gif';

export const SPECIES_DATA = {
    'Guppy': {
        sprite: tetraSprite,
        scale: .3,
        minSpeed: 2.0,
        maxSpeed: 4.0,
    },
    'Tetra': {
        sprite: tetraSprite,
        scale: .3,
        minSpeed: 1.0,
        maxSpeed: 2.5,
    },
    'Angelfish': {
        sprite: angelfishSprite,
        scale: .8,
        minSpeed: 0.5,
        maxSpeed: 1.5,
    },
    'Betta': {
        sprite: angelfishSprite,
        scale: .8,
        minSpeed: 0.8,
        maxSpeed: 1.8,
    },
};