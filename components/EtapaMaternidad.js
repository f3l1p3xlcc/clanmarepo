import React from 'react';
import {Link} from 'react-router-dom';

class EtapaMaternidad extends React.Component {
//const EtapaMaternidad = () => {
	
	add = (e) => {
		e.preventDefault();
		console.log('add EtapaMaternidad : ');
		
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts add", retriveContacts);
		
		this.props.history.push("/lista");
	}
	
	render(){
		console.log('render EtapaMaternidad : ');
	return (
			
			<div  className="containerflex">
			<form className="textCenter" onSubmit={this.add}>
				<div className="text-center">			
					<h3 style={{color: "#ED2E5D", marginTop : "50px", marginBottom:"50px"}}>
						¿En qué etapa de la maternidad estás?
					</h3>
				
			<div  className="containerflex">
				<div  className="lista1">

					
								<button className="button5">Aún no tengo hijos</button> 
			  
								<button className="button5">Embarazada</button> 
							  
								<button className="button5">Mamá primeriza</button>
				  
								<button className="button5">Intentando concebir</button>
				  
								<button className="button5">Dificultades para concebir</button>
				  
								<button className="button5">Mamá adolecente</button>
				  
								<button className="button5">Mamá de melliz@s/gemel@s</button>

						
								<button className="button5">Mamá soltera</button>
				  
								<button className="button5">Mamá de trilliz@s</button>
								<button className="button5">Mamá de bebé arcoiris</button>
				  
								<button className="button5">Mamá con mas de un padre</button>
								<button className="button5">Mamá de bebé estrella</button>
				  
								<button className="button5">Mamá de 2</button>
				  
								<button className="button5">Mamá de 3</button>
				  
								<button className="button5">Mamá de 4</button>
				  
								<button className="button5">Mamá de 5</button>
				  
								<button className="button5">Mamá de 6</button>
				  
								<button className="button5">Mamá con pérdida gestacional</button>
				  
								<button className="button5">No me siento representada con las opciones</button>
				</div>
				</div>
				</div>
            
				<div className="textCenter">
				
					  <button style={{width:"350px",
					  marginTop:"25px",
					  marginButton:"10px",
					  color: "#9D9D9D",
						lineHeight: "15px",
						border: "2px solid #D7D7D7",
						borderRadius: "40px",
					  background: "transparent"}}
						  
						className="btn btnLight">Continuar</button>
				
				</div>
		
			</form>
			</div>
			
	);
	}
};

export default EtapaMaternidad;