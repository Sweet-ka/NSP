import { Base } from "./base.js";
import { router, routes } from "./router.js";
import { components, wfm } from "./util.js";

export class Module {

    constructor(components = [Base], parentNode, routes = {}) {
        this.components = components;
        this.parentNode = parentNode;
        this.routes = routes;
    };

    start() {
        this.initComponents();
        if (this.routes) {
          this.initRoutes();
        }
    };

    initComponents() {
        this.components.forEach((item) => {
          item.render();
        });
    }
    
    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this));
        this.renderRoute();
    }
    
      renderRoute() {
        const url = router.getUrl();
        let route = this.routes.find((r) => r.path === url);
    
        if (wfm.isUndefined(route)) {
          route = this.routes.find((r) => r.path === '**');
        }
        const page = document.querySelector('.app');
        page.innerHTML = '';

        route.component.render();
    }    
}

export const module = new Module(components, document.body, routes);