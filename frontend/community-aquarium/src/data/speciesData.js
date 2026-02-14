import guppySprite from '../assets/images/fish/guppy.png';
import tetraSprite from '../assets/images/fish/neontetra.gif';
import angelfishSprite from '../assets/images/fish/angelfish.gif';
import bettaSprite from '../assets/images/fish/betta.png';

export const SPECIES_DATA = {
    'Guppy': {
        sprite: guppySprite,
        scale: .2,
        minSpeed: 2.0,
        maxSpeed: 4.0,
        maxRotation: Math.PI / 3,
    },
    'Tetra': {
        sprite: tetraSprite,
        scale: .3,
        minSpeed: 1.0,
        maxSpeed: 2.5,
        maxRotation: Math.PI / 3,
    },
    'Angelfish': {
        sprite: angelfishSprite,
        scale: .8,
        minSpeed: 0.5,
        maxSpeed: 1.5,
        maxRotation: Math.PI / 20,
    },
    'Betta': {
        sprite: bettaSprite,
        scale: .4,
        minSpeed: 0.8,
        maxSpeed: 1.8,
        maxRotation: Math.PI / 12,
    },
};