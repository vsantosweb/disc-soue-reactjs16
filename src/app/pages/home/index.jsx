import React, { useEffect } from 'react';

import Platform1 from '../../images/image1.png'
import Beneficio1 from '../../images/autonomo.png';
import Beneficio2 from '../../images/rocket.png';
import Beneficio3 from '../../images/safe.jpg';

export default function Home({ layout, pageConfig }) {

    useEffect(() => {
        layout('AppLayout')
        pageConfig({
            pageDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            pageTitle: 'Pagina Home',
            pageUrl: '/home',
            image: null
        })

    }, [layout, pageConfig]);

    return (

        <div className="homeSite">
            <div className="hero">
                <div className="titles text-center">
                    {/* <ChameleonSvg/> */}
                    <h4>Sua Plataforma</h4>
                    <h1 className="text-secondary">DISC</h1>
                    <p>O maior portal com conteúdo de qualidade sobre DISC e comportamento</p>
                </div>
                <svg className="waves" viewBox="0 0 1981 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="wave3" d="M544 45.0085C209.594 63.3725 15.3949 -0.988458 0 0.0115419V176.009H1981C1761.8 -55.9915 1492 81.0085 1219 57.0085C906.9 29.5712 926.409 24.0085 544 45.0085Z" fill="#DAEAF9" />
                    <path className="wave2" d="M446 53.0085C242.897 25.6911 14.5 69.5106 0 93.5106V177.011H1989.5C1989.5 177.011 1989.54 126.613 1987 123.5C1900.26 17.193 1641.16 77.2912 1515.5 74.5C1270.15 69.0504 1231.51 14.3279 1014 53.0085C796.491 91.6891 778.648 97.7498 446 53.0085Z" fill="#70B6F5" />
                    <path className="wave1" d="M323.908 127.302C195.961 121.686 15.3949 75.0086 0 76.0086V176.509H1992V103.5C1735 157 1681 61.7917 1559 68C1416.12 75.2707 1345.92 117.372 1197.5 127.302C1027.99 138.643 993.604 69.3532 765.5 76.0086C605.035 80.6905 484.287 134.343 323.908 127.302Z" fill="#2C7FCB" />
                </svg>
            </div>
            <section className="platformSection ">
                <div className="content">
                    <h3>Plataforma descomplicada</h3>
                    <div className="row">
                        <div className="col-xl-6">
                            <img className="w-100" src={Platform1} alt="" />
                        </div>
                        <div className="col-xl-6 d-flex">
                            <div className="texts">
                                <p>
                                    É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).
                            </p>
                                <a className="btn btnLink btn-secondary" href="#">Faça nosso teste grátis</a>
                            </div>
                        </div>
                    </div>
                </div>
                <svg className="waves reverse" viewBox="0 0 1981 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="wave3" d="M544 45.0085C209.594 63.3725 15.3949 -0.988458 0 0.0115419V176.009H1981C1761.8 -55.9915 1492 81.0085 1219 57.0085C906.9 29.5712 926.409 24.0085 544 45.0085Z" fill="#DAEAF9" />
                    <path className="wave2" d="M446 53.0085C242.897 25.6911 14.5 69.5106 0 93.5106V177.011H1989.5C1989.5 177.011 1989.54 126.613 1987 123.5C1900.26 17.193 1641.16 77.2912 1515.5 74.5C1270.15 69.0504 1231.51 14.3279 1014 53.0085C796.491 91.6891 778.648 97.7498 446 53.0085Z" fill="#70B6F5" />
                    <path className="wave1" d="M323.908 127.302C195.961 121.686 15.3949 75.0086 0 76.0086V176.509H1992V103.5C1735 157 1681 61.7917 1559 68C1416.12 75.2707 1345.92 117.372 1197.5 127.302C1027.99 138.643 993.604 69.3532 765.5 76.0086C605.035 80.6905 484.287 134.343 323.908 127.302Z" fill="#2C7FCB" />
                </svg>
            </section>
            <section className="platformSection ">
                <div className="content bg-white">
                    <h3 className="text-right">Benefícios</h3>
                    <div className="row">
                        <div className="col-md-4 col-xs-6 text-center">
                            <img className="icon" src={Beneficio1} />
                            <h3 className="title">Você Autônomo</h3>
                            <p className="description">
                                Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.
                        </p>
                        </div>
                        <div className="col-md-4 col-xs-6 text-center">
                            <img className="icon w-100 mb-4" src={Beneficio2} />
                            <h3 className="title">Você Autônomo</h3>
                            <p className="description">
                                Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.
                        </p>
                        </div>
                        <div className="col-md-4 col-xs-6 text-center">
                            <img className="icon" src={Beneficio3} />
                            <h3 className="title">Você Autônomo</h3>
                            <p className="description">
                                Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.
                        </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="platformSection cursos">
                <svg viewBox="0 0 1280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1294 180C765.357 150.995 477.679 117.887 -5 0V180H1294Z" fill="#2C7FCB" />
                </svg>
                <div className="content">
                    <div className="row">
                        <div className="col-xl-4">
                            <h3 className="mb-2">Cursos</h3>
                            <div className="texts">
                                <p>
                                    É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).
                            </p>
                                <a className="btn btnLink btn-secondary" href="#">Conheça nossos cursos</a>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <img className="w-100 icon" src={Platform1} alt="" />
                        </div>
                    </div>
                </div>
                <svg className="inverse" viewBox="0 0 1280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1294 180C765.357 150.995 477.679 117.887 -5 0V180H1294Z" fill="#2C7FCB" />
                </svg>
                <section className="library">
                    <h3 className="mb-2">Experimente você mesmo</h3>
                    <div className="canvas">
                        <iframe className="video" src="https://www.youtube.com/embed/GUEcLG-8IIA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </section>
            </section>
        </div>
    )
}