import { app } from "../app.js";
import { Base } from "../base.js";

export class Personal extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);
    }
}


export const personal = new Personal(app.node, 'div', 'personal');
personal.renderContent('Здесь будет личный кабинет');
