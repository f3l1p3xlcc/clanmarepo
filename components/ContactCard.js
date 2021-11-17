import React from 'react';
import { Link } from "react-router-dom";
import user from "../images/person.png";

import xmark from "../images/xmark.circle.png";

const ContactCard =(props) => {
	const {id,nombre,email} = props.contact
	return(
			<div className="item">
			<img className="ui avatar image" src={user} alt="user" />
				<div className="content">
				<Link to={{pathname: '/contact/${id}', state:{contact:props.contact}}}>
					<div className="header">{email}</div>
					
				</Link>
				</div>
				
				<img className="ui avatar image" src={xmark} alt="user" onClick={() => props.clickHander(id)} />
				
			</div>	
);
};
export default ContactCard;
