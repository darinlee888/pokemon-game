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
    let num = Math.min(vw, vh) / 2;
    if (len === 1) {
        num = Math.min(vw / 3, vh / 2);
    }
    if (len === 2) {
        num = Math.min(vw / 4, vh / 2);
    }
    if (len === 3) {
        num = Math.min(vw / 3, vh / 3);
    }
    if (len === 4 || len === 5) {
        num = Math.min(vw / 4, vh / 3);
    }
    if (len === 6 || len === 7) {
        num = Math.min(vw / 5, vh / 3);
    }
    if (len === 8) {
        num = Math.min(vw / 4, vh / 4);
    }
    if (len === 9) {
        num = Math.min(vw / 6, vh / 3);
    }
    if (len === 10) {
        num = Math.min(vw / 5, vh / 4);
    }
    return Math.floor(num / 10) * 10;
}

function calcLength(len) {
    let num = 0;
    if (len === 1) {
        num = Math.min(vw / 4, vh / 2);
    }
    if (len === 2) {
        num = Math.min(vw / 4, vh / 3);
    }
    if (len === 3) {
        num = Math.min(vw / 4, vh / 4);
    }
    if (len === 4) {
        num = Math.min(vw / 6, vh / 3);
    }
    if (len === 5 || len === 6) {
        num = Math.min(vw / 8, vh / 3);
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

function SelectScreen(props) {
    const [pokemonArray, setPokemonArray] = useState(
        '["Pikachu", "Jigglypuff", "Pichu", "Mewtwo", "Squirtle", "Ivysaur", "Charizard", "Lucario", "Greninja", "Incineroar"]'
    );

    let arr = JSON.parse(pokemonArray);
    let playerOnePokemon = props.playerOnePokemon;
    let playerTwoPokemon = props.playerTwoPokemon;

    function removeFromSelect(pokemon) {
        if (arr.length !== 0) {
            let index = Math.floor(Math.random() * arr.length);
            if (pokemon !== 'Random') {
                index = arr.indexOf(pokemon);
            }
            props.addPlayerOnePokemon(arr[index]);
            arr.splice(index, 1);
            setPokemonArray(JSON.stringify(arr));

            let index2 = Math.floor(Math.random() * arr.length);
            props.addPlayerTwoPokemon(arr[index2]);
            arr.splice(index2, 1);
            setPokemonArray(JSON.stringify(arr));
        }
    }

    let size = calcSize(arr.length);
    let len = calcLength(playerOnePokemon.length);

    console.log(playerOnePokemon.length, props.number);
    if (playerOnePokemon.length === props.number) {
        return (
            <div id="confirm">
                <div className="player">
                    <code>{props.name}</code>
                    <div className='profiles'>
                        {playerOnePokemon.map(pokemon => (
                            <div className='profile'>
                                <img src={imageMap[pokemon]} alt={pokemon} style={{width: len, height: len}}/>
                                <div>{pokemon}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="player">
                    <button id='start' onClick={props.changeScreen}>Start!</button>
                </div>
                <div className="player">
                    <code>Player Two</code>
                    <div className='profiles'>
                        {playerTwoPokemon.map(pokemon => (
                            <div className='profile'>
                                <img src={imageMap[pokemon]} alt={pokemon} style={{width: len, height: len}}/>
                                <div>{pokemon}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div id="select-screen">
            <code>Select Your Pokemon ({props.number - playerOnePokemon.length} left)</code>
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