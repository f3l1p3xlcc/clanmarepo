import React from 'react';
import {Link} from 'react-router-dom';

class CualNombre extends React.Component {
	
//const CualNombre = (props) => {
	add = (e) => {
		
		e.preventDefault();
		console.log('CualNombre : ', this.state.nombre);
		
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts add", retriveContacts);
		
		let text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
		
		let textojson = ' { "id": "78811069-fcee-4025-9f4d-6f6cd94a0f03", '+
						' "nombre": " '+ this.state.nombre +'", '+
						' "edadA": " '+ this.state.edadA +'", '+
						' "dedicas": " '+ this.state.dedicas +'", '+
						' "ubicacion": " '+ this.state.ubicacion +'", '+
						' "etapamaternidad": "", '+
						' "quebuscas": "", '+
						' "sobremi": "", ' +
						' "piensandemi": "", '+
						' "queinteresa": ""} '
		
		
		
		const texto_fsda = JSON.parse(textojson);
		
		retriveContacts[retriveContacts.length - 1] = texto_fsda;
		
		localStorage.setItem("contacts",JSON.stringify(retriveContacts));
		
		
		this.props.history.push("/etapamaternidad");
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
		
		
		
		//this.props.contacts
		const obj = JSON.stringify(this.props.contacts[0]);
		//console.log(" this.props ", typeof(this.props.contacts[1]));
		
		const objvalues = Object.values(this.props.contacts);
		console.log(" values ", objvalues[0]);
		
		//var myObj = JSON.parse(this.props.contacts[0]);
		
		
		console.log(" obj ", obj);
		
		var shoppingCart = {};
		
		
	return (		
		
  <div style={{overflowY:"scroll"}} className="containerflow">
		<form style={{overflowY:"hidden"}} className="textCenter" onSubmit={this.add}>
			<h3 style={{color: "#ED2E5D", marginTop : "10vh", marginBottom:"10vh"}}>¿Cuál es tu nombre?</h3>
			<div className="formGroup">
				<input type="text" className="borderBottom formControl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Juanita Perez"
				 onChange={( e )=> this.setState({nombre: e.target.value})}/>
			</div>
			<h3 style={{color: "#ED2E5D", marginTop : "10vh", marginBottom:"10vh"}}>¿Cuál es tu edad?</h3>
			<div className="formGroup">
				<input type="text" className="borderBottom formControl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="edad"
				 onChange={( e )=> this.setState({edadA: e.target.value})}/>
			</div>
			<h3 style={{color: "#ED2E5D", marginTop : "10vh", marginBottom:"10vh"}}>¿A qué te dedicas?</h3>
			<div className="formGroup">
				<input type="text" className="borderBottom formControl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ocupación"
				 onChange={( e )=> this.setState({dedicas: e.target.value})}/>
			</div>
			<h3 style={{color: "#ED2E5D", marginTop : "10vh", marginBottom:"10vh"}}>¿Dónde vives?</h3>
			<div className="formGroup">
				<input type="text" className="borderBottom formControl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ubicación"
				 onChange={( e )=> this.setState({ubicacion: e.target.value})}/>
			</div>
  
		
		<button style={{width:"350px",
		marginTop: "10vh",
		color: "#9D9D9D",
		lineHeight: "10vh",
		border: "2px solid #D7D7D7",
		borderRadius: "3vh",
		background: "transparent",
		transition: "all 0.3s ease 0s",
		marginTop: "10vh"}}
		type="submit" className="btn btnDanger">Continuar</button>
		
			</form>
		</div>

	);
	}
};

export default CualNombre;
