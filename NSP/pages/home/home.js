import { blogName } from "../../shared.js";
import { Base } from "../base.js";
import { Home_content } from "./section_blog/home_content.js";
import { Main } from "../main.js";
import { Section } from "../section.js";
import { Adver } from "./section_blog/adver.js";
import { app } from "../app.js";

export class Home extends Main {
    constructor(parentNode, className) {
        super(parentNode, 'main', className); // home_main

        this.decor = new Section(this.node, 'decor');
        this.decor.render();

        this.back = new Base(this.decor.node, 'div', 'back');
        this.back.render();
        
        this.eat = new Base(this.node, 'h2', 'eat');
        this.eat.render();
        this.eat.renderContent(blogName);

        this.health_blog = new Section(this.node, 'health_blog');
        this.health_blog.render();
        
        this.health_second_container = new Base(this.health_blog.node, 'div', 'container health_blog_container');
        this.health_second_container.render();

        this.health_content = new Base(this.health_second_container.node, 'div', 'health_content');
        this.health_content.render();

        this.health_content_blog = new Home_content(this.health_content.node, 'health_content_blog');
        this.health_content_blog.render();
        this.health_content_blog.addContent();

        this.health_content_adver = new Adver (this.health_content.node, 'health_content_adver');
        this.health_content_adver.render();
    }
}

export const home_main = new Home(app.node, 'home-main');

