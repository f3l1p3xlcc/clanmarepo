import React from 'react';
import {Link} from 'react-router-dom';

class CualNombre extends React.Component {
	
//const CualNombre = (props) => {
	add = (e) => {
		
		e.preventDefault();
		console.log('CualNombre : ', this.state.nombre);
		
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts add Cualnombre", retriveContacts);
		console.log(" retriveContacts add Cualnombre", retriveContacts);
		console.log(" this.state.nombre add ", this.state.nombre);
		
		let text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
		
		//console.log(' this.props.contacts[this.props.contacts.length -1] ', this.props.contacts[this.props.contacts.length -1]);
		/*if(this.props.contacts.length > 0) {
		let textojson = ' { "id": "'+this.props.contacts[this.props.contacts.length -1].id+'", '+
						' "nombre":"'+ this.state.nombre +'",'+
						' "email": "", '+
						' "fechanacimiento": "", '+
						' "dedicas": "", '+
						' "etapamaternidad": "", '+
						' "quebuscas": "", '+
						' "sobremi": "", ' +
						' "piensandemi": "", '+
						' "queinteresa": ""} '
		
		//console.log(' this.props.contacts[0].id : ',this.props.contacts[0].id)
		
		const texto_fsda = JSON.parse(textojson);
		}*/
		//retriveContacts[retriveContacts.length - 1] = texto_fsda;
		//retriveContacts[0] = texto_fsda;
		
		console.log('localStorage.setItem add : ',retriveContacts);
//		localStorage.setItem("contacts",JSON.stringify(retriveContacts));
		
		var retriveContacts2 = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts2 add Cualnombre", retriveContacts);
		
		//this.props.contacts[this.props.contacts.length -1].nombre = this.state.nombre;
		//this.props.contacts[0].nombre = this.state.nombre;
		console.log(" this.props.contacts[0].id", this.props.contacts);
		localStorage.setItem("contacts",JSON.stringify(this.props.contacts));
		this.props.history.push("/fechanacimiento");
	}
	
	render(){ 
		
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts render Cualnombre", retriveContacts);
		//console.log(" retriveContacts render Cualnombre 0 ", typeof(retriveContacts[0]));
		//var jsonrereive = JSON.parse(retriveContacts[0]);
		//console.log(' jsonrereive : ', jsonrereive);
		//console.log(" retriveContacts render Cualnombre 1 ", retriveContacts[1]);
		
		//const obj = JSON.stringify(this.props.contacts[0]);
		//console.log(" this.props.contacts CualNombre: ", this.props.contacts);	
		//console.log(" this.props ", typeof(this.props.contacts[1]));
		
		const objvalues = Object.values(this.props.contacts);
		//console.log(" values CualNombre render ", objvalues[0]);
		//console.log(" this.props.contacts render CualNombre", this.props.contacts[0]);
		
		//var myObj = JSON.parse(this.props.contacts[0]);

		
	return (		
	
		
  <div style={{width:"350px"}} className="container">
		<form className="textCenter" onSubmit={this.add}>
			<h3 style={{color: "#ED2E5D", marginTop : "150px", marginBottom:"50px"}}>¿Cuál es tu nombre?</h3>
			<div className="formGroup">
				<input type="text" className="borderBottom formControl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Juanita Perez"
				 onChange={( e )=> this.setState({nombre: e.target.value})}/>
			</div>
  
		
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
		
			</form>
		</div>

	);
	}
};

export default CualNombre;
