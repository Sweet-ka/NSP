import { Base } from "../../../base.js"
import { Email_wrap } from "../email_wrap/email_wrap.js";
import { Password_wrap } from "../password_wrap/password_wrap.js";

export class Entry extends Base {
    constructor(parentNode, className){
        super(parentNode, 'form', className)
        
        this.form_name = new Base(this.node, 'h5', 'form_name');
        this.form_name.render();
        this.form_name.renderContent('Вход');

        this.email_wrap = new Email_wrap(this.node, 'email_wrap');
        this.email_wrap.render();

        this.email_wrap.input_from_email.node.addEventListener('input', () => {
            this.email_wrap.emailCheckEntry();
        });

        this.password_wrap = new Password_wrap(this.node, 'password_wrap');
        this.password_wrap.render();

        this.entry_btn_wrap = new Base(this.node, 'div', 'entry_btn_wrap');
        this.entry_btn_wrap.render();

        this.entry_btn = new Base(this.entry_btn_wrap.node, 'button', 'entry_btn');
        this.entry_btn.render();
        this.entry_btn.renderContent('Войти');
        this.entry_btn.node.addEventListener('click', () => {
            if(this.email_wrap.emailCheckEntry() & this.password_wrap.passwordCheck()) { //проверка из БД
                console.log('submit');
                //console.log(this.email_wrap.input_from_email.node.value);
            }
        });

        this.reg_btn_wrap = new Base(this.node, 'div', 'reg_btn_wrap');
        this.reg_btn_wrap.render();

        this.reg_btn = new Base(this.reg_btn_wrap.node, 'button', 'reg_btn');
        this.reg_btn.render();
        this.reg_btn.renderContent('Регистрация');
    }
}