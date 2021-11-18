import React from 'react';
import {Link} from 'react-router-dom';

class QueBuscas extends React.Component {
//const EtapaMaternidad = () => {
	
	add = (e) => {
		e.preventDefault();
		console.log('add EtapaMaternidad : ');
		console.log('QueBuscas : ', 'QueBuscas');
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts add", retriveContacts);
		
		this.props.history.push("/sobremi");
	}
	
	render(){
		console.log('render EtapaMaternidad : ');
	return (
			
			<div  className="containerflex">
			<form className="textCenter" onSubmit={this.add}>
				<div className="text-center">			
					<h3 style={{color: "#ED2E5D", marginTop : "50px", marginBottom:"50px"}}>
						¿Que buscas en Clanma?
					</h3>
				
			<div  className="containerflex">
				<div  className="lista1">

					
								<button className="button5">Mamás que vivan cerca</button> 
								
								
								
								<button className="button5">Compartir experiencias</button> 
							  
								<button className="button5">Consejos de mamás experimentadas</button>
				  
								<button className="button5">Ayudar a mamás primerizas</button>
				  
								<button className="button5">Hacer preguntas</button>
				  
								<button className="button5">Conocer nuevas amistades</button>
				  
								<button className="button5">Información</button>

						
								<button className="button5">Intercambiar consejos</button>
				  
								<button className="button5">Sólo estoy explorando</button>
												  
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

export default QueBuscas;