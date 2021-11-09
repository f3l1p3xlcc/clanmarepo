import React from 'react';
import { Link } from "react-router-dom";
import user from "../images/Mama1.jpg";
import imgheader1 from '../images/borde.png';
import imgheader2 from '../images/2.png';
import imgheader3 from '../images/pencila.png'; 
import imgheader5 from '../images/pencil.png'; 
import imgheader4 from '../images/config.png';

import mama from '../images/Mama6.jpg';
import border6 from '../images/borde3.png';	

const ContactDetail =(props) => {
	const {nombre, edadA, dedicas, email, ubicacion} = props.location.state.contact;
	console.log(props);
	return(
	
	<div className="main">
			<div className="textCenter">
				<img style={{width: "100vw", height: "10vh"}} src={imgheader1} className="image" alt="" />
				<img style={{height:"15vh", marginTop: "-7vh", marginBottom:"7vh"}}  src={imgheader2} className="image" alt="" />
      </div>
				<div className="width1">
					<div style={{width: "80%", display:"flex"}}  className="Ltext">
            Mi Perfil
            <div className=" edit" >
						  <img  src={imgheader3} className="image" alt="" />
						  Editar Perfil
					  </div>
					</div>   
					<div style={{width: "20%",textAlign:"right"}}>
					  <div  className="config">
                    <img  src={imgheader4} className="image" alt="" />
            </div>
          </div>
				
				</div>   

			
			<div className="mamáperf" >
				<img  src={mama} className="foto" alt="" />
				<img  src={border6} className="base" alt="" />
				
           
				<div className="editfoto">
					<img  src={imgheader5}  alt="" />	
					Cambiar foto de perfil
				</div>
			</div>
			
			
			<div className="width">
          <div className="row">
            <div className="col">
              <div className="Ctext2">
			  <h1><div className="header">{nombre}</div></h1>
			  
						
              </div>
            </div> 
          </div>
            <div className="row">
            <div className="col Rtext1" >
              {edadA} años
          </div>
            <div className="col Ltext1">
              {dedicas}
            </div>
           </div>
           
            <div className=" Ctext1">
              {ubicacion}
            </div>
           
        </div>  
		
		<div className="intereses">
            <div className="editfoto1">Etapa de maternidad 
			<img  src={imgheader5} className="image" alt="" />	
			</div>
            <div className="">
            <button className="button3">Mamá primeriza</button>
          </div>
          </div>
          <div className="intereses">
            <div className="editfoto1">Qué busco en ClanMa 
			<img  src={imgheader5} className="image" alt="" />	
			</div>
            <div className="">
            <button className="button3">Mamás que vivan cerca</button>
            <button className="button3">Hacer preguntas</button>
          </div>
          </div>
          <div className="intereses">
            <div className="editfoto1">Sobre mi 
				<img  src={imgheader5} className="image" alt="" />	
			</div>
            <div className="">
            <button className="button3">Casada</button>
          </div>
          </div>
          <div className="intereses">
            <div className="editfoto1">Lo que mis amigos piensan de mi 
			<img  src={imgheader5} className="image" alt="" />	
			</div>
            <div className="">
            <button className="button3">Alegre</button>
            <button className="button3">Hogareña</button>
            <button className="button3">Artística</button>
            <button className="button3">Alegre</button>
            <button className="button3">Hogareña</button>
            
          </div>
          </div>
		
	</div>
		
);
};
export default ContactDetail;
