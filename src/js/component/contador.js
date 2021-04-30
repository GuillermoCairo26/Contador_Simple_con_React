import React from "react";
import PropTypes from "prop-types";

export function Contador(props) {
	return (
		// Contenedor
		<div className="container-fluid d-flex container">
			{/* Cajas */}

			{/* Botón reset */}
			<div className="icono">
				<button id="boton">
					<i className="far fa-clock"></i>
				</button>
			</div>

			{/* Contador */}

			{/* Caja cien miles */}
			<div className="caja">{props.sexto}</div>
			{/* Caja diez miles */}
			<div className="caja">{props.quinto}</div>
			{/* Caja miles */}
			<div className="caja">{props.cuarto}</div>
			{/* Caja centenas */}
			<div className="caja">{props.tercero}</div>
			{/* Caja decenas */}
			<div className="caja">{props.segundo}</div>
			{/* Caja unidades */}
			<div className="caja">{props.primero}</div>
		</div>
	);
}

Contador.propTypes = {
	sexto: PropTypes.string,
	quinto: PropTypes.string,
	cuarto: PropTypes.string,
	tercero: PropTypes.string,
	segundo: PropTypes.string,
	primero: PropTypes.string
};
