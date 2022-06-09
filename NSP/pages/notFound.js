import { app } from "./app.js";
import { Base } from "./base.js";

export class NotFound extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);
    }
}

export const notFound = new NotFound(app.node, 'not_found');
notFound.renderContent('nothing');