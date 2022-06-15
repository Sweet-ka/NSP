import { Base } from "./base.js";

export class Application extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', 'app')
    }
}

export const application = new Application(document.body, 'application');