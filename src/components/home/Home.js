import { useContext } from "react";
import { PersonajesContext } from "../../Context/PersonajesContext";
import getPersonaje from "../../utils/filtrarPersonajes";
import {Error, Cards, Search} from "../../components"

const Home = () => {
    const {datas,nuevosPersonajes} = useContext(PersonajesContext);
    return ( 
        <>
            <Search />
            { getPersonaje(datas,nuevosPersonajes).length <= 0 
                ? <Error/>
                : <Cards/>
            }
        </>
     );
}
 
export default Home;