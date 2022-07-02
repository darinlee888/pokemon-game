import './SelectScreen.css';
import Pikachu from './images/Pikachu_SSBU.png';
import Jigglypuff from './images/Jigglypuff_SSBU.png';
import Pichu from './images/Pichu_SSBU.png';
import Mewtwo from './images/Mewtwo_SSBU.png';
import Squirtle from './images/Squirtle_SSBU.png';
import Ivysaur from './images/Ivysaur_SSBU.png';
import Charizard from './images/Charizard_SSBU.png';
import Lucario from './images/Lucario_SSBU.png';
import Greninja from './images/Greninja_SSBU.png';
import Incineroar from './images/Incineroar_SSBU.png';
import Random from './images/random.png';
import { useState } from 'react';

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

function calcSize(len) {
    let num = Math.min(vw, vh);
    if (len === 0) {
        num /= 2;
    }
    if (len === 1 || len === 3) {
        num /= 3;
    }
    if (len === 2 || len === 4 || len === 5 || len === 8) {
        num /= 4;
    }
    if (len === 6 || len === 7 || len === 10) {
        num /= 5;
    }
    if (len === 9) {
        num /= 6;
    }
    return Math.floor(num / 10) * 10;
}

let imageMap = {
    'Pikachu': Pikachu,
    "Jigglypuff": Jigglypuff,
    "Pichu": Pichu,
    "Mewtwo": Mewtwo,
    "Squirtle": Squirtle,
    "Ivysaur": Ivysaur,
    "Charizard": Charizard,
    "Lucario": Lucario,
    "Greninja": Greninja,
    "Incineroar": Incineroar
};

let playerOnePokemon = [];
let playerTwoPokemon = [];

function SelectScreen(props) {
    const [pokemonArray, setPokemonArray] = useState(
        '["Pikachu", "Jigglypuff", "Pichu", "Mewtwo", "Squirtle", "Ivysaur", "Charizard", "Lucario", "Greninja", "Incineroar"]'
    );

    let arr = JSON.parse(pokemonArray);

    function removeFromSelect(pokemon) {
        if (arr.length !== 0) {
            let index = Math.floor(Math.random() * arr.length);
            if (pokemon !== 'Random') {
                index = arr.indexOf(pokemon);
            }
            console.log(index);
            playerOnePokemon.push(arr[index]);
            console.log(playerOnePokemon);
            arr.splice(index, 1);
            setPokemonArray(JSON.stringify(arr));

            let index2 = Math.floor(Math.random() * arr.length);
            console.log(index2);
            playerTwoPokemon.push(arr[index2]);
            console.log(playerTwoPokemon);
            arr.splice(index2, 1);
            setPokemonArray(JSON.stringify(arr));
        }
    }

    let size = calcSize(arr.length);

    return (
        <div id="select-screen">
            <code>Select Your Pokemon</code>
            <div id='profiles'>
                {arr.map(pokemon => (
                    <button className='profile-button' onClick={() => removeFromSelect(pokemon)}>
                        <img src={imageMap[pokemon]} alt={pokemon} style={{width: size, height: size}}/>
                        <div>{pokemon}</div>
                    </button>
                ))}
                <button className='profile-button' onClick={() => removeFromSelect('Random')}>
                    <img src={Random} alt='Random' style={{width: size, height: size}}/>
                    <div>Random</div>
                </button>
            </div>
        </div>
    );
}

export default SelectScreen;