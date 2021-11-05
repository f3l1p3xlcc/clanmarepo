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
import EtapaMaternidad from "./EtapaMaternidad";
import Hijos from "./Hijos";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactDetail from './ContactDetail';

function App() {
	const LOCAL_STORAGE_KEY ="contacts";
	const [contacts, setContacts] = useState([]);
	
	const addContactHandler =(contact) => {
		console.log(contact);
		setContacts([...contacts, {id:uuid(),...contact}]);
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
    <div className="ui container">
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
				render={()=>(<Bienvenido/>
				)}
				/>
				
				
				
				<Route path="/cualnombre" 
				exact 
				render={()=>(<CualNombre/>
				)}
				/>
				
				<Route path="/etapamaternidad" 
				exact 
				render={()=>(<EtapaMaternidad/>
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
				
				<Route path="/lista" 
				exact 
				render={(props)=>(<ContactList 
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
			</Switch>
		</Router>
		
		
	</div>
	);
}

export default App;
	