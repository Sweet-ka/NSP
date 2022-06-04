import { Base } from "../base.js";
import { Entry } from "./entry/entry.js";

export class Entry_window extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);

        this.block = new Base(document.body, 'div', 'block');
        this.block.render();

        this.close_wrap = new Base(this.node, 'div', 'close_wrap');
        this.close_wrap.render();

        this.close = new Base(this.close_wrap.node, 'button', 'close');
        this.close.render();
        this.close.renderContent('X');

        this.entry = new Entry(this.node, 'entry');
        this.entry.render();

        this.close.node.addEventListener('click', () => {
            this.node.style.display = 'none';
            this.block.node.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        this.block.node.addEventListener('click', () => {
            this.node.style.display = 'none';
            this.block.node.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
}