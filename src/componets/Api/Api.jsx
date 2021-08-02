import React, { useState } from "react" ;
import FotoPockemon from "./FotoPokemon";

const Api = ()=>{

    const[IngresarPokemon,setIngresarpokemon] = useState("pikachu")

    const[pokemon,setpokemon] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png")

    const url = 'https://pokeapi.co/api/v2/pokemon/'

    const ObtenerPokemon = ()=>{
        fetch(url + IngresarPokemon)
        .then((response) => response.json())
        .then((data)=> setpokemon(data.sprites.front_default))

    };
    ObtenerPokemon();


return ( <div>

    
<FotoPockemon img ={pokemon}/>

<form >
    
<input type = "text" 
    onSubmit ={(evento) => {evento.preventDefault();
        ObtenerPokemon();}}

    onChange={ (evento) => setIngresarpokemon (evento.target.value)}

/>
</form>



</div>
)
 };

export default Api