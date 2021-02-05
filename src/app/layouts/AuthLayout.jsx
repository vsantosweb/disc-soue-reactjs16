import React from 'react';
import bgLogin from '../images/platform/imgs/bgLogin.png';

export default function AuthLayout({ children }) {
    return (
        <div className="login">
            <section className="loginArea">
                <div className="content">
                    {children}
                </div>
            </section>
            <section className="heroTitles" style={{ background: `url(${bgLogin})` }}>
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