import React from 'react';
import {Link} from 'react-router-dom';

class EtapaMaternidad extends React.Component {
//const EtapaMaternidad = () => {
	
	add = (e) => {
		console.log('this.state.aunno : ', this.state.aunno)
		e.preventDefault();
		console.log('add EtapaMaternidad : ');
		//console.log('aunnotengohijos : ', this.state.aunnotengohijos);
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts add", retriveContacts);
		/*
		let textojson = ' {"id":"'+this.props.contacts[this.props.contacts.length -1].id+'",'+
						' "nombre":"'+this.props.contacts[this.props.contacts.length -1].nombre+'",'+
						' "fechanacimiento":"'+this.props.contacts[this.props.contacts.length -1].fechanacimiento+'",'+
						' "dedicas":"'+this.props.contacts[this.props.contacts.length -1].dedicas+'",'+
						' "etapamaternidad":"'+this.state.aunno + ','+ this.state.embarazada+ ','+this.state.primeriza+'",'+
						' "email": "", '+						
						' "quebuscas":"",'+
						' "sobremi":"",'+
						' "piensandemi":"",'+
						' "queinteresa":""}'
		
		
		
		const texto_fsda = JSON.parse(textojson);
		
		retriveContacts[retriveContacts.length - 1] = texto_fsda;
		*/
		localStorage.setItem("contacts",JSON.stringify(retriveContacts));
		
		//this.props.contacts[this.props.contacts.length -1].etapamaternidad = this.state.aunno+ ' ' +this.state.embarazada+' '+ this.state.primeriza;
		//this.props.contacts[0].dedicas = this.state.dedica;
		console.log(" this.state.dedica", this.state.aunno);
		console.log(" this.state.dedica", this.state.embarazada);
		console.log(" this.state.dedica", this.state.primeriza);
		console.log(" this.props.contacts[0].id", this.props.contacts);
		localStorage.setItem("contacts",JSON.stringify(this.props.contacts));
		
		this.props.history.push("/quebuscas");
	}
	
	render(){
		
		

		console.log('render EtapaMaternidad : ');
		
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts EtapaMaternidad", retriveContacts);
		
		
		var options = {
  'First': false,
  'Second': true,
  'Third': false
};
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
								
						
								<input type="checkbox" id="aunno" name="aunno" value="1" onChange={( e )=> this.setState({aunno: e.target.value})}/>
								
								<button className="button5">Embarazada</button> 
							   <input type="checkbox" id="embarazada" name="embarazada" value="1" onChange={( e )=> this.setState({embarazada: e.target.value})} />
							  
							 
  
								<button className="button5">Mamá primeriza</button>
								<input type="checkbox" id="primeriza" name="primeriza" value="1" onChange={( e )=> this.setState({primeriza: e.target.value})} />
				  
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