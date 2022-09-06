import './BattleScreen.css';
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
import { Pokedex, multiplier } from './Utils';

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

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

let size = Math.min(vw/4, vh/2);

function BattleScreen(props) {
  return (
    <div id="battle-screen">
      <div id="battlefield">
        
      </div>
      <div>
        <div id="message-box"></div>
        <div id="option-select">
          <button className='option'>Attack</button>
          <button className='option'>Change Pokemon</button>
        </div>
      </div>
    </div>
  );
}

export default BattleScreen;