import '../hojas-de-estilos/Boton.css';

const Boton = ({ texto, esBotonDeClick, manejarClic }) =>{
	return(
		<button
			className={ (esBotonDeClick) ? 'boton-click' : 'boton-reiniciar' }
			onClick={ manejarClic }
		>
			{texto}
		</button>
	)
};


export default Boton;