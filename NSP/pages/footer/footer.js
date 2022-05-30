import { menu_footer } from "../../shared.js";
import { Base } from "../base.js";
import { Nav } from "../header/nav.js";

export class Footer extends Base {
    constructor(parentNode, classname) {
        super(parentNode, 'footer', classname);

        this.container = new Base(this.node, 'div', 'container footer_container');
        this.container.render();

        this.nav = new Nav(this.container.node, 'footer_nav', 'footer_nav_list', 'network');
        this.nav.render();
        this.nav.addLiItem(menu_footer, 'a', 'network_logo');
        this.addLiNetwork(menu_footer);
    }

    addLiNetwork(menu_footer) {
        for (let i = 0; i < menu_footer.length; i++) {
            this.nav.li[i].node.style.backgroundImage = `url(${menu_footer[i].icon_src})`;
            menu_footer[i].name;
        }
    }

}

export const footer = new Footer(document.body, 'footer', 'footer');