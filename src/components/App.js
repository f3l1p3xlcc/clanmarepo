import React, {useState, useEffect} from "react";
import { uuid } from 'uuidv4';
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Inicio from "./Inicio";
import InicioSecion from "./InicioSecion";
import Bienvenido from "./Bienvenido";
import Registro from "./Registro";
import CualNombre from "./CualNombre";
import Cuantoshijos from "./Cuantoshijos";
import EtapaMaternidad from "./EtapaMaternidad";
import FechaNacimiento from "./FechaNacimiento";
import QueBuscas from "./QueBuscas";
import AqueDedicas from "./AqueDedicas";
import SobreMi from "./SobreMi";
import AmigosPiensan from "./AmigosPiensan";
import QueInteresa from "./QueInteresa";
import Hijos from "./Hijos";
import Ubicacion from "./Ubicacion";
import Fotos from "./Fotos";
import Unpasomas from "./Unpasomas";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactDetail from './ContactDetail';
import ContactDetail2 from './ContactDetail2';

function App() {
	
	

	const LOCAL_STORAGE_KEY ="contacts";
		
	const [contacts, setContacts] = useState([]);
		
	const addContactHandler =(contact) => {
		console.log(' addContactHandler contact : ', contact);
		setContacts([...contacts, {id:uuid(),...contact}]);
		console.log(' addContactHandler contact : {id:uuid()...', contact);
	};
	
	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;		
		});
		setContacts(newContactList);
	}
	
	useEffect(() => {
		 const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		 if(retriveContacts) setContacts(retriveContacts);
	},[]);
	
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
		
	},[contacts]);
	
  return (
    <div className="App">
		<Router>
		{/*<Header />*/}
			<Switch>
				<Route path="/InicioSecion" 
				exact 
				render={()=>(<InicioSecion/>
				)}
				/>
				
				<Route path="/Registro" 
				exact 
				render={()=>(<Registro/>
				)}
				/>
				
				<Route path="/Bienvenido" 
				exact 
				render={(props)=>(<Bienvenido 
					{...props} 
					contacts={contacts} 
					getContactId={removeContactHandler}
				/>
				)}
				/>
				
				<Route path="/lista" 
				exact 
				render={(props)=>(<ContactList 
					{...props} 
					contacts={contacts} 
					getContactId={removeContactHandler}
				/>
				)}
				/>
				
				
				<Route path="/cualnombre" 
				exact 
				render={(props)=>(<CualNombre
				{...props}
				contacts={contacts} 
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				<Route path="/fechanacimiento" 
				exact 
				render={(props)=>(<FechaNacimiento
				{...props}
				contacts={contacts} 
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				<Route path="/aquededicas" 
				exact 
				render={(props)=>(<AqueDedicas
				{...props}
				contacts={contacts}
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				
				<Route path="/cuantoshijos" 
				exact 
				render={()=>(<Cuantoshijos/>
				)}
				/>
				
				<Route path="/etapamaternidad" 
				exact 
				render={(props)=>(<EtapaMaternidad
				{...props}
				contacts={contacts} 
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				
				<Route path="/quebuscas" 
				exact 
				render={(props)=>(<QueBuscas
				{...props}
				contacts={contacts} 
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				
				<Route path="/sobremi" 
				exact 
				render={(props)=>(<SobreMi
				{...props}
				contacts={contacts} 
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				<Route path="/amigospiensan" 
				exact 
				render={(props)=>(<AmigosPiensan
				{...props}
				contacts={contacts} 
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				
				<Route path="/hijos" 
				exact 
				render={()=>(<Hijos/>
				)}
				/>
				
			    <Route path="/" 
				exact 
				render={()=>(<Inicio/>
				)}
				/>
				
				<Route path="/ubicacion" 
				exact 
				render={(props)=>(<Ubicacion
				{...props}
				contacts={contacts} 
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				
				<Route path="/fotos" 
				exact 
				render={(props)=>(<Fotos
				{...props}
				contacts={contacts} 
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				
				<Route path="/unpasomas" 
				exact 
				render={(props)=>(<Unpasomas
				{...props}
				contacts={contacts} 
				getContactId={removeContactHandler}
				/>
				)}
				/>
				
				
				<Route 
				path="/agregar" 
				render={(props)=>(
					<AddContact {...props} addContactHandler={addContactHandler} />
				)}
				/>
				
				<Route 
				path="/contact/:id" 
				component={ContactDetail}/>
				
				<Route 
				path="/contact2/:id" 
				component={ContactDetail2}/>
				
			</Switch>
		</Router>
		
		
	</div>
	);
}

export default App;
	