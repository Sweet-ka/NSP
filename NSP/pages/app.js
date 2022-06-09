import { Base } from "./base.js";

export class App extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', 'app')
    }
}

export const app = new App(document.body, 'app');