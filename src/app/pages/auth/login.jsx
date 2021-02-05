import React, { useState, useEffect } from 'react';
import Validator from 'Validator';
import Authenticator from '../../../start/authenticator';
import MailIcon from '../../images/icons/email_icon2.png';
import PswIcon from '../../images/icons/password_icon.png';
import OpenEyeIcon from '../../images/icons/open_eye_icon.png';
import CloseEyeIcon from '../../images/icons/close_eye_icon.png';
import '../../../styles/css/platform/login.css';
import * as Heading from '../../components/Heading/styles';
import { Spinner } from 'react-bootstrap';
import LoaderTracker from '../../components/LoaderTracker';

export default function Login({ layout, pageConfig }) {

    const [formData, setFormData] = useState(false);
    const [formFeedBack, setFormFeedBack] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [showPsw, setShowPsw] = useState(false)
    const [buttonTExt, setButtonText] = useState('Entrar')

    useEffect(() => {

        layout('AuthLayout')

        pageConfig({
            pageDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            pageTitle: 'Login',
            pageUrl: '/login',
            image: null
        })
        rules(formData);

    }, [layout, pageConfig])

    const rules = (data) => (
        Validator.make(data, {
            email: 'required|email',
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
        e.target.reset();
        setDisableSubmit(true);

        const validator = rules(formData);

        if (validator.fails()) {
            console.log(validator.getErrors())
            setFormFeedBack(validator.getErrors());
            setDisableSubmit(true);
            return;
        }

        Authenticator.signIn(formData).then(response => {
            if (response.data.error) {
                setFormFeedBack({ response: response.data.message });
                setFormData('');
                setDisableSubmit(true);
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} >
            <Heading.Container>
                <Heading.Title>Login</Heading.Title>
                <Heading.SubTitle>Insira suas credenciais para entrar</Heading.SubTitle>
            </Heading.Container>

            <div className="input-group mb-4">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <img src={MailIcon} />
                    </span>
                </div>
                <input className="form-control" type="email" name="email" defaultValue={formData.email} onChange={handleInput} placeholder="email@exemplo.com" required />
            </div>

            <div className="input-group mb-2 mb-sm-4">
                <div className="input-group-prepend">
                    <span className="input-group-text pswIcon" id="basic-addon1">
                        <img src={PswIcon} />
                    </span>
                </div>
                <input className="form-control" type={showPsw ? 'text' : 'password'} name="password" defaultValue={formData.password} onChange={handleInput} id="pass" required autoComplete="current-password" placeholder="*******" aria-label="password" />
                <div className="input-group-prepend">
                    <span className="input-group-text eyeIcon" id="eyeIcon">
                        <img src={!showPsw ? CloseEyeIcon : OpenEyeIcon} id="olho" onClick={() => setShowPsw(!showPsw ? true : false)} />
                    </span>
                </div>
            </div>
            <div className="text-danger mb-4">
                <small>{formFeedBack.response}</small>
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
            <button className="btn btnTheme btn-primary btn-lg btn-block" disabled={disableSubmit}> {buttonTExt} <LoaderTracker fullContent={false} area={'signIn'} /> </button>
            {/* <Link exact to="/register" type="button" className="btn btnTheme btn-secondary btn-lg btn-block btnLink">Cadastre-se</Link> */}
        </form>
    )
}