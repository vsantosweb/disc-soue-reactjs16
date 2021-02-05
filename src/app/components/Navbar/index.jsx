import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Logo from '../../images/logoPM.png';
import Dropdown from 'react-bootstrap/Dropdown'
// import userIcon from '../../imgs/userIcon.png'
import { ReactComponent as UserIcon } from '../../images/svg/userProfile.svg';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar(props) {

    function singOut() {


    }

    return (
        <nav id="navbar" className={`navbar navbar-expand-lg ${props.color === 'white' ? 'navbar-light' : 'navbar-dark'} templete fixed-top bg-${props.color || 'primary'}`}>

            <NavLink className="navbar-brand" exact to="#">
                <img className="logo" src={Logo} alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {
                props.layout !== "chg" ?
                    props.layout === "app" ?
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact to="/dashboard">Início<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact to="/lists">Listas<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact to="/linkGenerate">Enviar Disc<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact to="/consultation">Resultados<span className="sr-only">(current)</span></NavLink>
                                </li>

                            </ul>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <div className="userArea">
                                        {/* <img className="w-100" src={userIcon} alt=""/> */}
                                        <UserIcon className="userIcon" />
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* <small className="text-center p-5">{userEmail}</small> */}
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-1">Alterar senha</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Sobre nós</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="text-center" onClick={singOut}>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        :
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact to="/home">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact to="/assessoria-consultoria">Assessoria<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact to="/nossos-servicos">Nossos Serviços<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact to="/treinamentos">Treinamentos<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact to="/cursos">Cursos<span className="sr-only">(current)</span></NavLink>
                                </li>
                            </ul>
                            <NavLink exact to='/login' id="navBtn" className="btn btnLink">Entrar</NavLink>
                        </div>
                    : ''
            }
        </nav >
    )
}