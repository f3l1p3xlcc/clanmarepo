import React from "react";

class EditContact extends React.Component {
	
	constructor(props) {
		super(props)
		const {id, nombre, email} = props.location.state.contact;
		this.state = {
			id,
			nombre,
			email,
		};
	}
	
	update = (e) => {
		e.preventDefault();
		if(this.state.contrasenha ==="" || this.state.email === "") {
			alert("campos obligatorios");
			return
		}
		this.props.updateContactHandler(this.state);
		this.setState({ contrasenha: "", email: ""});
		console.log(' EditContact update', this.state);
		this.props.history.push("/Bienvenido");
	}
	
	render(){
		
		const texto = ' sadfasdf';
		console.log(' this.state : ', this.state);
		var retriveContacts = JSON.parse(localStorage.getItem("contacts"));
		console.log(" retriveContacts AddContact", retriveContacts);
		
		return(
		<div className="ui main">
		

			<div className="container">
				<form className="text-center" onSubmit={this.update}>
				
				<h3 style={{ color: "#ED2E5D", marginTop: "50px" , marginBottom:"50px"}}>Editar</h3>
				
				<div className="form-group">
					<label for="exampleInputEmail1">Introduce tu dirección de correo electrónico</label>
					
					<input style ={{lineHeight: "15px",  border: "2px solid",  borderRadius: "40px", background: "transparent"}}
						type="text" 
						className="form-control" 
						id="exampleInputEmail1" 
						aria-describedby="emailHelp"
						placeholder="hola@conectamama.cl" value={this.state.email} onChange={( e )=> this.setState({email: e.target.value})} />
				</div>
				
				<div className="form-group">
					<label for="exampleInputPassword1">Introduce tu contraseña</label>
					<input style ={{lineHeight:"15px",border: "2px solid",	borderRadius: "40px", background: "transparent"}}
					type="password" 
					name="name"
					
					className="form-control" id="exampleInputPassword1" 
					placeholder="*********" value={this.state.contrasenha} onChange={( e )=> this.setState({contrasenha: e.target.value})}/>
				</div>
				
				<div className="form-group">
					<label for="exampleInputPassword1">Introduce nuevamente tu contraseña</label>
					<input style ={{lineHeight:"15px",border: "2px solid",	borderRadius: "40px", background: "transparent"}}
					type="password" 
					name="name"
					className="form-control" id="exampleInputPassword1" 
					value={this.state.contrasenhaconf} onChange={( e )=> this.setState({contrasenhaconf: e.target.value})} />
				</div>
				
				<button style={{width:"350px", marginTop: "125px", color: "#9D9D9D", lineHeight: "15px", border: "2px solid #D7D7D7",
					borderRadius: "40px",
					background: "transparent",
				transition: "all 0.3s ease 0s", marginTop: "150px"}} type="submit" class="btn btn-danger">editar</button>

			</form>
			</div>
		</div>
		);
	}	
}
export default EditContact;
