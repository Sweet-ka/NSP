import { Base } from "../../base.js";
import { Img } from "../../header/image.js";
import { content_blog } from "../content_blog.js";
// import { health_content } from "../home.js";

export class Home_content extends Base {
    constructor(parentNode, className, ) {
        super(parentNode, 'div', className);
        this.contents = [];

        for (let i = 0; i < content_blog.length; i++) {
            let content = new Base(this.node, 'div', `content content${i + 1}`);
            this.contents.push(content);
        }
    }
    addContent() {
        for (let i = 0; i < content_blog.length; i++) {
            const content_wrap = new Base(this.contents[i].node, 'div', 'content_wrap');
            this.contents[i].render();
            content_wrap.render();

            const content_title = new Base(content_wrap.node, 'h2', 'content_title');
            const content_img_wrap = new Base(content_wrap.node, 'div', 'content_img_wrap'); 
            const content_img = new Img(content_img_wrap.node, '', content_blog[i].image);

            content_title.render();
            content_title.renderContent(content_blog[i].title)
            content_img_wrap.render();
            content_img.render();

            const text = new Base(this.contents[i].node, 'p', 'content_text');
            text.render();
            text.renderContent(content_blog[i].info);

            if (i % 2 !== 0) {
                text.node.style.order = -1;
            }
            
            const details = new Base(text.node, 'btn', 'details');
            details.render();
            details.renderContent('Подробнее');
        }
    }
}