import React from 'react';
import {Link} from 'react-router-dom';

class FechaNacimiento extends React.Component {
	
//const CualNombre = (props) => {
	add = (e) => {
		
		e.preventDefault();
		console.log('FechaNacimiento : ', this.state.nombre);
		
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts FechaNacimiento : ", retriveContacts);
		
		let text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
		
		console.log(' this.props.contacts[this.props.contacts.length -1] ', this.props.contacts[this.props.contacts.length -1])
		
		let textojson = ' { "id": "'+this.props.contacts[this.props.contacts.length -1].id+'", '+
						' "nombre": " '+this.props.contacts[this.props.contacts.length -1].nombre+'", '+
						' "fechanacimiento": "'+this.state.fecha+'", '+
						' "email": "", '+
						' "dedicas": "", '+
						' "etapamaternidad": "", '+
						' "quebuscas": "", '+
						' "sobremi": "", ' +
						' "piensandemi": "", '+
						' "queinteresa": ""} '
		
		
		
		const texto_fsda = JSON.parse(textojson);
		
		retriveContacts[retriveContacts.length - 1] = texto_fsda;
		
		console.log('localStorage.setItem : ',retriveContacts);
		localStorage.setItem("contacts",JSON.stringify(retriveContacts));
		
		var retriveContacts2 = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts2 FechaNacimiento", retriveContacts);
		
		this.props.contacts[this.props.contacts.length -1].fechanacimiento = this.state.fecha;
		console.log(" this.state.fecha", this.state.fecha);
		console.log(" this.props.contacts[0].id", this.props.contacts);
		localStorage.setItem("contacts",JSON.stringify(this.props.contacts));
		this.props.history.push("/aquededicas");
	}
	
	render(){ 
		
		/*
			let text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
		*/

		
		//const texto_fsda = JSON.parse('{"nombre" : " asdf", "id" : "123", "email":"aadasdf"}, {"nombre" : " asdf2", "id" : "1232", "email":"aadasdf2"}');
		//const texto_fsda = JSON.parse(text);
		//var retriveContacts2 = JSON.parse(text);
		
		//
		
		//console.log(" retriveContacts2 0 : ", retriveContacts2.employees[0].nombre);
		
		//console.log(" this.state ", this.state)
		//var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		//console.log(" retriveContacts asdfasdf", retriveContacts);
		
		//console.log(" retriveContacts 0 : ", retriveContacts[0]);
		//var values = Object.values(retriveContacts);
		//console.log('Object.values :', values);
		//retriveContacts[0] = texto_fsda;
		
		//localStorage.setItem("contacts",JSON.stringify(retriveContacts));
		
		//const objjson = JSON.parse(values);
		
		//console.log(' JSON.parse : ', objjson);
		
		
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts FechaNacimiento", retriveContacts);
		
		//this.props.contacts
		//const obj = JSON.stringify(this.props.contacts[0]);
		//console.log(" this.props ", typeof(this.props.contacts[1]));
		
		//const objvalues = Object.values(this.props.contacts);
		
		//console.log(" values[0] FechaNacimiento", objvalues[0]);
		//console.log(" values FechaNacimiento", objvalues);
		
		//const objvalues = Object.values(this.props.contacts);
		//console.log(" values FechaNacimiento ", objvalues);
		//console.log(" this.props.contacts FechaNacimiento", this.props.contacts);
		
		//var myObj = JSON.parse(this.props.contacts[0]);
		
		
		//console.log(" obj v", obj);
		
		//var shoppingCart = {};
		
		
	return (		
		
  <div style={{width:"350px"}} className="container">
		<form className="textCenter" onSubmit={this.add}>
			<h3 style={{color: "#ED2E5D", marginTop : "150px", marginBottom:"50px"}}>¿Cuál es tu fecha de nacimiento?</h3>
			<div className="formGroup">
				<input type="text" className="borderBottom formControl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="01/01/1900"
				 onChange={( e )=> this.setState({fecha: e.target.value})}/>
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

export default FechaNacimiento;
