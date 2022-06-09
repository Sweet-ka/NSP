import { Base } from "../../../base.js";

export class Login_wrap extends Base {
    constructor(parentNode, className) {
        super(parentNode, 'div', className);

        this.login_label = new Base(this.node, 'label', 'form_field login_label')
        this.login_label.render();
        this.login_label.renderContent('Логин');

        this.input_from_login = new Base(this.login_label.node, 'input', 'form_window_input')
        this.input_from_login.render();

        this.login_info = new Base(this.login_label.node, 'p', 'login_info');
        this.login_info.render();

        this.input_from_login.node.addEventListener('input', () => {
            this.loginCheck();
        });

    }

    loginCheck() {
        if(this.input_from_login.node.value === '') {
            this.input_from_login.node.style.borderColor = 'red';
            this.login_info.renderContent('Это поле не может быть пустым!');
            return false;
        } else if(/^[A-Za-zА-Яа-я0-9-_]{3,20}$/.test(this.input_from_login.node.value)) {
            this.input_from_login.node.style.borderColor = 'cadetblue';
            this.login_info.renderContent('');
            return true;
        } else {
            this.input_from_login.node.style.borderColor = 'red';
            this.login_info.renderContent('Tолько буквы, цифры, знак переноса и нижнее подчерквание, от 3 до 20 символов');
            return false;
        }
    }

}