import { alph, passLength } from "../../../shared.js";

export class Pass {
    constructor() {
        this.pass = '';
        for (let i = 0; i < passLength; i++) {
            switch (Math.round(Math.random(), 0)) {
                case 0: this.pass += alph()[Math.round(Math.random()*(alph().length - 1), 0)].toUpperCase();
                        break;
                case 1: this.pass += alph()[Math.round(Math.random()*(alph().length - 1), 0)];
                        break;
            }
        }
    }
}
