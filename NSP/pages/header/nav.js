import { menu } from "../../shared.js";
import { Base } from "../base.js";

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

}