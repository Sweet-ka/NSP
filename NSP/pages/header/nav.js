import { menu } from "../../shared.js";
import { Base } from "../base.js";
import { Entry_window } from "../entry_window/entry_window.js";

export class Nav extends Base {
    constructor(parentNode, className, classNameList, classNameItem) {
        super(parentNode, 'nav', className);

        this.list = new Base(this.node, 'ul', classNameList)
        this.list.render();
        
        this.li = [];

        for (let i = 0; i < menu.length; i++) {
            let li = new Base(this.list.node, 'li', classNameItem);
            this.li.push(li);
        }

        this.entry_window = new Entry_window(document.body, 'entry_window');
        this.entry_window.render();
    }      

    addLiItem(menu, itemTag, itemClassName) {
        for (let i = 0; i < menu.length; i++) {
            const item = new Base(this.li[i].node, itemTag, itemClassName);
            this.li[i].render();
            item.render()
        }
    }

    addLiContent(menu) {
        for (let i = 0; i < menu.length; i++) {
            this.li[i].node.innerHTML = menu[i].name;
            this.li[i].node.addEventListener('click', ()=>{
            location.hash = menu[i].hash;            })
        }
    }

    addRegistrPanel(parentNode) {
        this.autor_wrap = new Base(parentNode, 'div', 'autor_wrap');
        this.autor_wrap.render();

        this.autor_btn = new Base(this.autor_wrap.node, 'button', 'autor_btn');
        this.autor_btn.render();

        this.registr_btn = new Base(this.autor_wrap.node, 'button', 'registr_btn');
        this.registr_btn.render();

        this.autor_btn.node.addEventListener('click', () => {
            this.entry_window.node.style.display = 'block';
            this.entry_window.block.node.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

}