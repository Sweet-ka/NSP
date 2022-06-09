import { Base } from "../../../base.js";

export class Email_wrap extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);

        this.label_from_email = new Base(this.node, 'label', 'form_field email_label')
        this.label_from_email.render();
        this.label_from_email.renderContent('Электронная почта');

        this.input_from_email = new Base(this.label_from_email.node, 'input', 'form_window_input')
        this.input_from_email.render();
        this.input_from_email.node.setAttribute('placeholder', 'email');
        this.input_from_email.node.setAttribute('type', 'text');

        this.email_info = new Base(this.label_from_email.node, 'p', 'email_info');
        this.email_info.render();
    }

    emailCheckReg() {
        if(this.input_from_email.node.value === '') {
            this.input_from_email.node.style.borderColor = 'red';
            this.email_info.renderContent('Это поле не может быть пустым!');
            return false;
        } else if (/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,8}$/i.test(this.input_from_email.node.value)) {
            this.input_from_email.node.style.borderColor = 'cadetblue';
            this.email_info.renderContent('');
            return true;
        } else {
            this.input_from_email.node.style.borderColor = 'red';
            this.email_info.renderContent('Введите корректный email!');
            return false;
        }
    }

    emailCheckEntry() {
        if(this.input_from_email.node.value === '') {
            this.input_from_email.node.style.borderColor = 'red';
            this.email_info.renderContent('Это поле не может быть пустым!');
            return false;
        } else {
            this.input_from_email.node.style.borderColor = '#b0b3b8';
            this.email_info.renderContent('');
            return true;
        }
    }

}