import React, { useState, useEffect } from 'react';
import Validator from 'Validator';
import Authenticator from '../../../start/authenticator';
import MailIcon from '../../images/icons/email_icon2.png';
import PswIcon from '../../images/icons/password_icon.png';

import OpenEyeIcon from '../../images/icons/open_eye_icon.png';
import CloseEyeIcon from '../../images/icons/close_eye_icon.png';

import css from './auth.module.scss';
console.log(css);
export default function Login({ layout, pageConfig }) {

    const [formData, setFormData] = useState(false);
    const [formFeedBack, setFormFeedBack] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(true);
 
    const [email, setEmail] = useState();
    const [psw, setPsw] = useState();
    const [errors, setErrors] = useState();
    const [showPsw, setShowPsw] = useState(false)
    const [eyePswIcon, setEyePswIcon] = useState(CloseEyeIcon)

    useEffect(() => {

        layout('AuthLayout')

        pageConfig({
            pageDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            pageTitle: 'Login',
            pageUrl: '/login',
            image: null
        })

    }, [layout, pageConfig])

    const rules = (data) => (

        Validator.make(data, {
            email: 'required',
            password: 'required'
        })
    )

    const handleInput = (e) => {
        let json = Object.assign({}, formData);
        json[e.target.name] = e.target.value;

        setFormData(json);
        const validator = rules(json);

        if (validator.fails()) {
            console.log(validator.getErrors()[e.target.name])
            setFormFeedBack({ [e.target.name]: validator.getErrors()[e.target.name] });
            setDisableSubmit(true);

            return;
        }
        setFormFeedBack(false)
        setDisableSubmit(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validator = rules(formData);

        if (validator.fails()) {
            console.log(validator.getErrors())
            setFormFeedBack(validator.getErrors());
            setDisableSubmit(true);
            return;
        }
        console.log('ok')
        Authenticator.signIn(formData).then(response => {
            console.log(response)
            if (response.data.error) {
                setFormFeedBack({ customFeedback: response.data.message })
            }
        })
        e.target.reset();
    }

    function showPassword() {
        setShowPsw(!showPsw)

        if (!showPsw === true) {
            setEyePswIcon(OpenEyeIcon)
        }
        else {
            setEyePswIcon(CloseEyeIcon)
        }
    }
    return (
        <div className={css.login}>
            <section className={css.loginArea}>
                <div className={css.content}>
                    <form>
                        <div className={css.titles}>
                            <h3 className={`${css.title} ${css.textFont1}`}>Login</h3>
                            <p className="subTitle">Insira suas credenciais para entrar</p>
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <img src={MailIcon} />
                                </span>
                            </div>
                            <input className="form-control" type="email" name="email" value={formData.email} onChange={handleInput} placeholder="email@exemplo.com" required />
                        </div>
                        <div className="input-group mb-2 mb-sm-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text pswIcon" id="basic-addon1">
                                    <img src={PswIcon} />
                                </span>
                            </div>
                            <input className="form-control" type={showPsw ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInput} id="pass" required autoComplete="current-password" placeholder="*******" aria-label="password" />
                            <div className="input-group-prepend">
                                <span className="input-group-text eyeIcon" id="eyeIcon">
                                    <img src={eyePswIcon} id="olho" onClick={showPassword} />
                                </span>
                            </div>
                        </div>
                        <div className="text-danger mb-4">
                            <small>{errors}</small>
                        </div>
                        <div className="row subForms">
                            <div className="col">
                                <div className="form-check">
                                    <label className="checkbox path">
                                        <input type="checkbox" />
                                        <svg viewBox="0 0 21 21">
                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                        </svg>
                                Lembre-se de mim
                            </label>
                                </div>
                            </div>
                            <div className="col text-right">
                                <a className="themeLink" href="#">Esqueci minha senha</a>
                            </div>
                        </div>
                        <button
                            className="btn btnTheme btn-primary btn-lg btn-block"
                            type="button"
                            onClick={() => handleSubmit()}
                            id="submit">
                            Entrar
                    </button>

                        {/* <Link exact to="/register" type="button" className="btn btnTheme btn-secondary btn-lg btn-block btnLink">Cadastre-se</Link> */}
                    </form>
                </div>
            </section>
            <section className="heroTitles ">
                <div className="content">
                    <h3 className="textFont1 title">Bem-vindo</h3>
                    <p className="subTitle">“É tão incrível finalmente ser compreendido.”</p>
                    <p className="text">Faça nosso Teste de Personalidade e obtenha uma descrição “assustadoramente precisa” de quem
                    você é e por
                que faz as coisas da maneira que faz.</p>
                </div>
            </section>
        </div>
    )
}