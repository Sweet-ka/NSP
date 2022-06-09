import { Base } from "../../../base.js";

export class Password_wrap extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);

        this.label_from_password = new Base(this.node, 'label', 'form_window password_label')
        this.label_from_password.render();
        this.label_from_password.renderContent('Пароль');

        this.forget = new Base(this.label_from_password.node, 'button', 'forget');
        this.forget.render();
        this.forget.renderContent('Забыли пароль?');

        this.input_from_password = new Base(this.label_from_password.node, 'input', 'form_window_input')
        this.input_from_password.render();
        this.input_from_password.node.setAttribute('type', 'text');

        this.password_info = new Base(this.label_from_password.node, 'p', 'password_info');
        this.password_info.render();

        this.input_from_password.node.addEventListener('input', () => {
            this.passwordCheck();
        });

    }

    passwordCheck() {
        if(this.input_from_password.node.value === '') {
            this.input_from_password.node.style.borderColor = 'red';
            this.password_info.renderContent('Введите пароль');
            return false;
        } else {
            this.input_from_password.node.style.borderColor = '#b0b3b8';
            this.password_info.renderContent('');
            return true;
        }
    }

}