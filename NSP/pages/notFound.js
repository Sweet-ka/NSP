import { application } from "./application.js";
import { Base } from "./base.js";

export class NotFound extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);
    }
}

export const notFound = new NotFound(application.node, 'not_found');
notFound.renderContent('nothing');