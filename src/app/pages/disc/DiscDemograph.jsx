import React from 'react';
import { useHistory } from 'react-router-dom';
// import { ReactComponent as WelcomeSvg } from './welcome.svg';
// import '../../../../styles/css/platform/questions/welcome.css';
// import { useDispatch } from 'react-redux';
// import { startDisc } from '../../../../services/actions/questions';

export default function DiscDemograph() {

    return (
        <div className="welcome ">
            <div className="row">
                <div className="col-xl-7">
                    {/* <WelcomeSvg /> */}
                </div>
                <div className="col-xl-5 texts">
                    <div className="titles text-primary">
                        <h4 className="mt-5">
                            Olá, seja
                            <span style={{ whiteSpace: "nowrap" }}> bem-vindo!</span>
                        </h4>
                        <h3></h3>
                    </div>
                    <p className="text-black-50">
                        Este é o seu teste DISC da <b className="text-secondary">Proposito MAIOR</b>. Você está pronto para esta aventura?
                        <br />
                        <br />
                        Caso esteja pronto, não perca tempo! Clique no botão <b className="text-secondary">COMEÇAR</b> e inicie sua jornada de descobrimento pessoal!
                        <br />
                        <br />
                        Nós estamos muito curiosos para sabermos qual será o seu <b className="text-secondary">PERFIL</b>. Vamos lá?
                    </p>
                    <div className="d-flex justify-content-end mt-5">
                        {/* <a onClick={resetStorage} className="btn btnLink btn-secondary d-flex align-items-center">
                            Começar
                            <svg className="arrow" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path transform="rotate(180 16.48031234741211,15.999499320983888) " fill-rule="evenodd" fill="#ffffff" d="m11.262,16.714l9.002,8.999c0.395,0.394 1.035,0.394 1.431,0c0.395,-0.394 0.395,-1.034 0,-1.428l-8.288,-8.285l8.287,-8.285c0.395,-0.394 0.395,-1.034 0,-1.429c-0.395,-0.394 -1.036,-0.394 -1.431,0l-9.002,8.999c-0.389,0.39 -0.389,1.04 0.001,1.429z" clip-rule="evenodd" />
                                </g>
                            </svg>
                        </a> */}
                    </div>
                </div>
            </div>
            <svg className="background" viewBox="0 0 1270 662" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-3 662H1270C870.657 635.628 122.296 657.781 8.01406 68.3529C3.77474 46.4879 0.0981555 23.7173 -3 0V662Z" fill="#2C7FCB" />
            </svg>
        </div>
    );
}