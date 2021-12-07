import React from 'react';
import {Link} from 'react-router-dom';

class SobreMi extends React.Component {
//const EtapaMaternidad = () => {
	
	add = (e) => {
		e.preventDefault();
		console.log('add EtapaMaternidad : ');
		console.log('QueBuscas : ', 'QueBuscas');
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts add", retriveContacts);
		
		this.props.history.push("/amigospiensan");
	}
	
	render(){
		console.log('render EtapaMaternidad : ');
	return (
			
			<div  className="containerflex">
			<form className="textCenter" onSubmit={this.add}>
				<div className="text-center">			
					<h3 style={{color: "#ED2E5D", marginTop : "50px", marginBottom:"50px"}}>
						Sobre Mi
					</h3>
				
			<div  className="containerflex">
				<div  className="lista1">

					
								<button className="button5">Estudiante</button> 
								
								<button className="button5">Madrastra</button> 
							  
								<button className="button5">Adoptante</button>
				  
								<button className="button5">Divorciada</button>
				  
								<button className="button5">LGBTQ+</button>
				  
								<button className="button5">No binaria</button>
								
								<button className="button5">Retirada</button>
				  
								<button className="button5">Habilidades diferentes</button>

						
								<button className="button5"> Casada</button>
				  
								<button className="button5">Soltera</button>
								<button className="button5">Viuda</button>
				  
								<button className="button5">Extrangera</button>
								<button className="button5">Abuela</button>
				  
								<button className="button5">Indigena</button>
				  
								<button className="button5">Enfermedad autoinmune</button>
				  
								<button className="button5">Basura cero</button>
				  
								<button className="button5">Activista</button>
				  
								<button className="button5">Vegana</button>
				  
								<button className="button5">Vegetariana</button>
				  
								<button className="button5">Animal lover</button>
								
								<button className="button5">Cat lover</button>
								
								<button className="button5">Dog lover</button>
								
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

export default SobreMi;