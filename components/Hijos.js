import React from 'react';
import {Link} from 'react-router-dom';

const Hijos = () => {
	return (
		<div className="main">
			<div className="ui container center">
				<h2>Hijos / as?</h2>
			</div>
			<Link to="/lista">
				<button className="ui button blue right">
					Continuar
				</button>
			</Link>
		</div>
	);
};

export default Hijos;