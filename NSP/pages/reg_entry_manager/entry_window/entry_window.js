import { Base } from "../../base.js";
import { Entry } from "./entry/entry.js";

export class Entry_window extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);

        this.block_entry = new Base(document.body, 'div', 'block block_entry');
        this.block_entry.render();

        this.close_wrap = new Base(this.node, 'div', 'close_wrap');
        this.close_wrap.render();

        this.close = new Base(this.close_wrap.node, 'button', 'close');
        this.close.render();
        this.close.renderContent('X');

        this.entry = new Entry(this.node, 'entry');
        this.entry.render();
    }
}