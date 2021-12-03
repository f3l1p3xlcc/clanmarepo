import React from 'react';
import {Link} from 'react-router-dom';

class AmigosPiensan extends React.Component {
//const EtapaMaternidad = () => {
	
	add = (e) => {
		e.preventDefault();
		console.log('add EtapaMaternidad : ');
		console.log('QueBuscas : ', 'QueBuscas');
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts add", retriveContacts);
		
		this.props.history.push("/hijos");
	}
	
	render(){
		console.log('render EtapaMaternidad : ');
	return (
			
			<div  className="containerflex">
			<form className="textCenter" onSubmit={this.add}>
				<div className="text-center">			
					<h3 style={{color: "#ED2E5D", marginTop : "50px", marginBottom:"50px"}}>
						Lo que mis amigos piensan de mi
					</h3>
				
			<div  className="containerflex">
				<div  className="lista1">

					
								<button className="button5">Alegre</button> 
								
								
								<button className="button5">Espiritual</button> 
							  
								<button className="button5">Líder</button>
				  
								<button className="button5">Rutinaria</button>
				  
								<button className="button5">Ahorradora</button>
				  
								<button className="button5">Aventurera</button>
				  
								<button className="button5">Protectora</button>

						
								<button className="button5">Geek</button>
				  
								<button className="button5">Caritativa</button>
								<button className="button5">Ecologista</button>
				  
								<button className="button5">Hogareña</button>
								<button className="button5">Fiestera</button>
				  
								<button className="button5">Urbana</button>
				  
								<button className="button5">Somnolienta</button>
				  
								<button className="button5">Adicta a la adrenalina</button>
				  
								<button className="button5">Cafeína lover</button>
				  
								<button className="button5">Pasional</button>
				  
								<button className="button5">Outdoorsy</button>
				  
								<button className="button5">Artística</button>
								<button className="button5">Melodramática</button>
								<button className="button5">Graciosa</button>
								<button className="button5">Vanidosa</button>
								<button className="button5">Alternativa</button>
								<button className="button5">Relajada</button>
								<button className="button5">Estricta</button>
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

export default AmigosPiensan;