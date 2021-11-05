<<<<<<< HEAD
import React from "react";

class AddContact extends React.Component {
	state = {
		nombre: "",
		email: "", 
		contrasenha: "", 
		contrasenhaconf: "", 
	}
	
	add = (e) => {
		e.preventDefault();
		if(this.state.contrasenha ==="" || this.state.email === "") {
			alert("campos obligatorios");
			return
		}
		this.props.addContactHandler(this.state);
		this.setState({ contrasenha: "", email: ""});
		console.log(this.state);
		this.props.history.push("/Bienvenido");
	}
	
	render(){
		return(
		<div className="ui main">
		

			<div className="container">
				<form className="text-center" onSubmit={this.add}>
				
				<h3 style={{ color: "#ED2E5D", marginTop: "50px" , marginBottom:"50px"}}>Registro</h3>
				
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
				transition: "all 0.3s ease 0s", marginTop: "150px"}} type="submit" class="btn btn-danger">Continuar</button>
  
				
  
			</form>
			</div>
		</div>
		  
		
		);
	}
	
}

export default AddContact;
=======
import React from "react";

class AddContact extends React.Component {
	state = {
		nombre: "",
		email: "", 
		contrasenha: "", 
		contrasenhaconf: "", 
	}
	
	add = (e) => {
		e.preventDefault();
		if(this.state.contrasenha ==="" || this.state.email === "") {
			alert("campos obligatorios");
			return
		}
		this.props.addContactHandler(this.state);
		this.setState({ contrasenha: "", email: ""});
		console.log(this.state);
		this.props.history.push("/Bienvenido");
	}
	
	render(){
		return(
		<div className="ui main">
		

			<div className="container">
				<form className="text-center" onSubmit={this.add}>
				
				<h3 style={{ color: "#ED2E5D", marginTop: "50px" , marginBottom:"50px"}}>Registro</h3>
				
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
				transition: "all 0.3s ease 0s", marginTop: "150px"}} type="submit" class="btn btn-danger">Continuar</button>
  
				
  
			</form>
			</div>
		</div>
		  
		
		);
	}
	
}

export default AddContact;
>>>>>>> c75c5d0fa403e6f557dd105f46491204ec3beaed
