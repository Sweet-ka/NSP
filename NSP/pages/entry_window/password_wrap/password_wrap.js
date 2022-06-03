import { Base } from "../../base.js";

export class Password_wrap extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);

        this.password_label = new Base(this.node, 'div', 'form_field password_label');
        this.password_label.render();

        this.label_from_password = new Base(this.password_label.node, 'label', 'form_window')
        this.label_from_password.render();
        this.label_from_password.renderContent('Пароль');

        this.forget = new Base(this.password_label.node, 'button', 'forget');
        this.forget.render();
        this.forget.renderContent('Забыли пароль?');

        this.password_input = new Base(this.node, 'div', 'form_field password_input');
        this.password_input.render();

        this.input_from_password = new Base(this.password_input.node, 'input', 'form_window_input')
        this.input_from_password.render();
    }
}