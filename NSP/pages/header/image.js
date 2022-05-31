import { Base } from "../base.js";

export class Img extends Base {
    constructor(parentNode, className, src = '') {
        super(parentNode, 'img', className);
        this.node.setAttribute('src', src);
    }
}