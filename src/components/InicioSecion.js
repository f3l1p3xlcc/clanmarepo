import React from 'react';
import logo from '../images/LogoB.png';
import logot from '../images/clanma.png';
import './App_clanma.css';
import {Link} from 'react-router-dom';


const InicioSecion = () => {
	return (
		<div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logot} className="App-logot" alt="" />
        
		
		<div className="textCenter">
		<Link to="/agregar">
          <button className="button2">Usuaria Nueva</button>
		</Link>
        </div>  
		
        <div className="textCenter">
          <button className="button1">Iniciar Sesión</button>
        </div> 
		
        <div className="textCenter">
		Al crear una cuenta está aceptando nuestros
		<a href="#"> terminos y condiciones </a> 
        </div>
		
      </header>
    </div>
	);
};

export default InicioSecion;