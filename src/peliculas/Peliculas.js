import peliculas from '../../src/pelicula.json';
import Peli from './PeliculasData.js';
function Pelicula(){ 
    return (
        <>
        {peliculas.map(peli => 
            <Peli
                img = {peli.img}
                titulo = {peli.titulo}
                descripcion = {peli.descripcion}
                sinopsis = {peli.sinopsis}
                reparto = {peli.reparto}
                
            >  
            </Peli>)}
        </> 
        
    );
}
export default Pelicula;