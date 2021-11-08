import React from 'react';
import logo from '../images/LogoB.png';
import logot from '../images/clanma.png';
import './App_clanma.css';
import {Link} from 'react-router-dom';

const Inicio = () => {
	return (
		<div className="App" >
      <header className="App-header">
	  
        <img src={logo} className="App-logo" alt="logo" />
		<Link to="/InicioSecion">
			<img src={logot} className="App-logot" alt="" />
		</Link>
        <p className="tc">
          Somos tribu, <br/> somos ClanMa
        </p>
      </header>
    </div>
	);
};

export default Inicio;