import { logo_image } from "../../shared.js";
import { Base } from "../base.js";
import { Img } from "./image.js";

export class Logo extends Base {
    constructor(parentNode, className, hash) {
        super(parentNode, 'div', className);

        this.logo_link = new Base(this.node, 'div', 'logo_link');
        this.logo_link.render();
        
        this.logo_link.node.addEventListener('click', ()=> {
            location.hash = hash;
        })

        this.logo_img = new Img(this.logo_link.node, 'logo_img', logo_image);
        this.logo_img.render();
    }
}