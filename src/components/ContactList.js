import React from "react";
import {Link} from 'react-router-dom';
import ContactCard from "./ContactCard";
 
const ContactList = (props) => {
	
	console.log(props);
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};
	
	//getapi...
	
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
	
export default ContactList;