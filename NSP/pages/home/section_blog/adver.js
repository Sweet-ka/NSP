import { sale_info_text, advantages } from "../../../shared.js";
import { Base } from "../../base.js";
import { Nav } from "../../header/nav.js";

export class Adver extends Base {
    constructor(parentNode, classname) {
        super(parentNode, 'div', classname);

        this.adver_content = new Base(this.node, 'div', 'adver_content');
        this.adver_content.render();

        this.sale_info = new Base(this.adver_content.node, 'div', 'sale_info');
        this.sale_info.render();
        this.sale_info.renderContent(sale_info_text);

        this.sale_info_advantages = new Base(this.adver_content.node, 'ul', 'sale_info_advantages');
        this.sale_info_advantages.render();

        this.advantages = [];
        this.renderAdvantages(advantages);

        this.reg = new Base(this.adver_content.node, 'btn', 'reg');
        this.reg.render();
        this.reg.renderContent('Оформить дисконт');
        this.reg.node.onclick = ()=> {
            window.open('https://nsp25.com/signup?sid=123&market=25');
            return false;
        } ;
    }

    renderAdvantages(advantages) {
        for (let i = 0; i < advantages.length; i++) {
            let li = new Base(this.sale_info_advantages.node, 'li', 'advantage');
            this.advantages.push(li);
            this.advantages[i].render();
            this.advantages[i].renderContent(advantages[i]);
        }
    }
}