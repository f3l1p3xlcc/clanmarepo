<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';

const CualNombre = () => {
	return (
		
		
		
  <div style={{width:"350px"}} className="container">
		<form className="textCenter">
			<h3 style={{color: "#ED2E5D", marginTop : "150px", marginBottom:"50px"}}>¿Cuál es tu nombre?</h3>
			<div className="formGroup">
				<input type="email" className="borderBottom formControl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Juanita Perez"/>
			</div>
  
		<Link to="/etapamaternidad">
		<button style={{width:"350px",
		marginTop: "125px",
		color: "#9D9D9D",
		lineHeight: "15px",
		border: "2px solid #D7D7D7",
		borderRadius: "40px",
		background: "transparent",
		transition: "all 0.3s ease 0s",
		marginTop: "125px"}}
		type="submit" className="btn btnDanger">Continuar</button>
	</Link>
		</form>
	</div>

	);
};

=======
import React from 'react';
import {Link} from 'react-router-dom';

const CualNombre = () => {
	return (
		
		
		
  <div style={{width:"350px"}} className="container">
		<form className="textCenter">
			<h3 style={{color: "#ED2E5D", marginTop : "150px", marginBottom:"50px"}}>¿Cuál es tu nombre?</h3>
			<div className="formGroup">
				<input type="email" className="borderBottom formControl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Juanita Perez"/>
			</div>
  
		<Link to="/etapamaternidad">
		<button style={{width:"350px",
		marginTop: "125px",
		color: "#9D9D9D",
		lineHeight: "15px",
		border: "2px solid #D7D7D7",
		borderRadius: "40px",
		background: "transparent",
		transition: "all 0.3s ease 0s",
		marginTop: "125px"}}
		type="submit" className="btn btnDanger">Continuar</button>
	</Link>
		</form>
	</div>

	);
};

>>>>>>> c75c5d0fa403e6f557dd105f46491204ec3beaed
export default CualNombre;