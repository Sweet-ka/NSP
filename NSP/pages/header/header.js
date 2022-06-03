import { menu } from '../../shared.js';
import { Base } from '../base.js';
import { Nav } from '../header/nav.js';
import { Logo } from './logo.js';

export class Header extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'header', className)

        this.container = new Base(this.node, 'div', 'container header_container');
        this.container.render();
        
        this.logo = new Logo(this.container.node, 'logo', 'home');
        this.logo.render();

        this.nav = new Nav(this.container.node, 'header_nav', 'header_nav_list', 'menu');
        this.nav.render();
        this.nav.addLiItem(menu, 'div', 'menu');
        this.nav.addLiContent(menu);
        this.nav.addRegistrPanel(this.container.node);
        this.nav.autor_btn.renderContent('Войти');
        this.nav.registr_btn.renderContent('Зарегистрироваться');
    } 
}

export const header = new Header(document.body, 'header');