import guppySprite from '../assets/images/fish/guppy.png';
import tetraSprite from '../assets/images/fish/neontetra.gif';
import angelfishSprite from '../assets/images/fish/angelfish.gif';
import bettaSprite from '../assets/images/fish/betta.png';

export const VARIANT_DATA = {
    "red_dragon_guppy": {
        name: "Red Dragon Guppy",
        species: "guppy",
        sprite: guppySprite,
        baseYield: 1,
    },
    "neon_tetra": {
        name: "Neon Tetra",
        species: "tetra",
        sprite: tetraSprite,
        baseYield: 2,
    },
    "zebra_angelfish": {
        name: "Zebra Angelfish",
        species: "angelfish",
        sprite: angelfishSprite,
        baseYield: 10,
    },
    "halfmoon_betta": {
        name: "Halfmoon Betta",
        species: "betta",
        sprite: bettaSprite,
        baseYield: 5,
    }
};
