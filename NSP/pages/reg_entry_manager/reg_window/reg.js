import { Base } from "../../base.js"
import { Email_wrap } from "../entry_window/email_wrap/email_wrap.js";
import { Login_wrap } from "../entry_window/login_wrap/login_wrap.js";
import { Pass } from "./password_get.js";

export class Reg extends Base {
    constructor(parentNode, className){
        super(parentNode, 'div', className)

        this.reg_form = new Base(this.node, 'form', 'reg_form');
        
        this.reg_form_name = new Base(this.node, 'h5', 'reg_form_name');
        this.reg_form_name.render();
        this.reg_form_name.renderContent('Регистрация');

        this.login_wrap = new Login_wrap(this.node, 'login_wrap');
        this.login_wrap.render();

        this.email_wrap = new Email_wrap(this.node, 'email_wrap');
        this.email_wrap.render();

        this.confirm_reg_btn_wrap = new Base(this.node, 'div', 'confirm_reg_btn_wrap');
        this.confirm_reg_btn_wrap.render();

        this.confirm_reg_btn = new Base(this.confirm_reg_btn_wrap.node, 'button', 'confirm_reg_btn');
        this.confirm_reg_btn.render();
        this.confirm_reg_btn.renderContent('Зарегистрироваться');
        this.confirm_reg_btn.node.addEventListener('click', () => {
            if(this.login_wrap.loginCheck() & this.email_wrap.emailCheckReg()) {
                const pass = new Pass();
                let data = {
                    login: this.login_wrap.input_from_login.node.value,
                    email: this.email_wrap.input_from_email.node.value,
                    password: pass.pass,
                    avatar: ''
                }
                console.log(data);
                fetch('http://127.0.0.1:5500/server.php',{
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json'
                    } 
                })
                .then(data =>{
                    console.log(data.text())
                })
            }
        });

        this.email_wrap.input_from_email.node.addEventListener('input', () => {
            this.email_wrap.emailCheckReg();
        });

        this.back_btn_wrap = new Base(this.node, 'div', 'back_btn_wrap');
        this.back_btn_wrap.render();

        this.back_btn = new Base(this.back_btn_wrap.node, 'button', 'back_btn');
        this.back_btn.render();
        this.back_btn.renderContent('Отмена');    
    }
}