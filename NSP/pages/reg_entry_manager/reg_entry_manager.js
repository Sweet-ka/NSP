import { Base } from "../base.js";
import { Entry_window } from "./entry_window/entry_window.js";
import { Reg_window } from "./reg_window/reg_window.js";

export class Manager extends Base {
    constructor (parentNode, className) {
        super (parentNode, 'div', className);

        this.entry_window = new Entry_window(document.body, 'entry_window');
        this.entry_window.render();

        this.reg_window = new Reg_window(document.body, 'reg_window');
        this.reg_window.render();

        this.entry_window.close.node.addEventListener('click', () => {
            this.entry_window.node.style.display = 'none';
            this.entry_window.block_entry.node.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        this.entry_window.block_entry.node.addEventListener('click', () => {
            this.entry_window.node.style.display = 'none';
            this.entry_window.block_entry.node.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        this.entry_window.entry.reg_btn.node.addEventListener('click', () => {
            this.entry_window.node.style.display = 'none';
            this.entry_window.block_entry.node.style.display = 'none';
            this.reg_window.node.style.display = 'block';
            this.reg_window.block_reg.node.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        this.reg_window.reg.back_btn.node.addEventListener('click', () => {
            this.entry_window.node.style.display = 'block';
            this.entry_window.block_entry.node.style.display = 'block';
            this.reg_window.node.style.display = 'none';
            this.reg_window.block_reg.node.style.display = 'none';
        });
    }
}