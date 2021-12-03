import React from 'react';
import {Link} from 'react-router-dom';

const Hijos = () => {
	return (
		<div className="main">
			<div className="ui container center">
				<h2>Hijos / as?</h2>
				
				<Link to="/ubicacion">
			<button style={{width:"350px",
					  marginTop:"25px",
					  marginButton:"10px",
					  color: "#9D9D9D",
						lineHeight: "15px",
						border: "2px solid #D7D7D7",
						borderRadius: "40px",
					  background: "transparent"}}
						  
						className="btn btnLight">Continuar</button>
			</Link>
			
			</div>
			
			
			
			
			
		</div>
	);
};

export default Hijos;