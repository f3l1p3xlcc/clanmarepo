<<<<<<< HEAD
import React from "react";
import {Link} from 'react-router-dom';
import ContactCard from "./ContactCard";
 
const ContactList = (props) => {
	console.log(props);
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};
	
	
	const renderContacList = props.contacts.map((contact) => {
		return 	<ContactCard 
				contact={contact} 
				clickHander = {deleteContactHandler}
				key={contact.id}/>;
	});
	return( 
		<div className="main">
			<h2>Lista de Usuari@s</h2>
			
			<div>
			<Link to="/agregar">
				<button className="ui button blue right">
					Agregar Usuari@
				</button>
			</Link>
			</div>
		
		<div className="ui celled list">
		{renderContacList}
		</div>
		</div>
		);
};
	
=======
import React from "react";
import {Link} from 'react-router-dom';
import ContactCard from "./ContactCard";
 
const ContactList = (props) => {
	console.log(props);
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};
	
	
	const renderContacList = props.contacts.map((contact) => {
		return 	<ContactCard 
				contact={contact} 
				clickHander = {deleteContactHandler}
				key={contact.id}/>;
	});
	return( 
		<div className="main">
			<h2>Lista de Usuari@s</h2>
			
			<div>
			<Link to="/agregar">
				<button className="ui button blue right">
					Agregar Usuari@
				</button>
			</Link>
			</div>
		
		<div className="ui celled list">
		{renderContacList}
		</div>
		</div>
		);
};
	
>>>>>>> c75c5d0fa403e6f557dd105f46491204ec3beaed
export default ContactList;