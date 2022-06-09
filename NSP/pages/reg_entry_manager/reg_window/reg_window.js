import { Base } from "../../base.js";
import { Reg } from "./reg.js";

export class Reg_window extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);

        this.block_reg = new Base(document.body, 'div', 'block block_reg');
        this.block_reg.render();

        this.reg = new Reg(this.node, 'reg');
        this.reg.render();
    }
}