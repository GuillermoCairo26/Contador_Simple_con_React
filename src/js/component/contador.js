import React from "react";

export function Contador() {
	return (
		// Contenedor
		<div className="container-fluid d-flex container">
			{/* Cajas */}
			<div className="icono">
				<i class="far fa-clock"></i>
			</div>
			<div className="caja">0</div>
			<div className="caja">0</div>
			<div className="caja">0</div>
			<div className="caja">0</div>
			<div className="caja">0</div>
			<div className="caja">0</div>
		</div>
	);
}
