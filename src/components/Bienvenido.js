import React from 'react';
import {Link} from 'react-router-dom';

import imgheader1 from '../images/borde.png';
import imgheader2 from '../images/2.png';

const Inicio = () => {
	return (
	

		
		
		<div className="main">
		
				<div className="app1">
				
				
					<div className="text-center">
							
							<img style={{width: "100vw", height: "10vh"}} src={imgheader1} className="image" alt="" />
							
							<img style={{height:"15vh", marginTop: "-7vh", marginBottom:"7vh"}}  src={imgheader2} className="image" alt="" />
						
						<div className="bv">¡Bienvenida a ClanMa!</div>
						
						<div className="bv1">
							Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
						</div>
						<div className="rr">
						Recomendaciones y reglas
						</div>
						
						<div className="rr1">
						Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							
						Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
						</div> 


						<div className="aceptar">
						<Link to="/cualnombre">
							<button className="button1">Aceptar</button>
							</Link>
						</div>
       

					</div>
		  
		  
				
          
				</div>
				
		</div>
	);
};

export default Inicio;