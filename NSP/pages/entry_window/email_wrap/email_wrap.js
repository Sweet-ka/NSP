import { Base } from "../../base.js";

export class Email_wrap extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);

        this.email_label = new Base(this.node, 'div', 'form_field email_label');
        this.email_label.render();

        this.label_from_email = new Base(this.email_label.node, 'label', 'form_window')
        this.label_from_email.render();
        this.label_from_email.renderContent('Электронная почта');

        this.email_input = new Base(this.node, 'div', 'form_field email_input');
        this.email_input.render();

        this.input_from_email = new Base(this.email_input.node, 'input', 'form_window_input')
        this.input_from_email.render();
    }
}