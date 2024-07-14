import Bas from './Screen/bas';
import AddEvent from './Screen/AddEvent';
import ListeEmail from './Screen/listeEmail';
import Annonce from './Screen/annonce';

import { HeadScreen } from './components/headScreen';
import { Navbar } from './components/navbar';
import { Paroisse } from './components/nosParoisse';
import { Horaires } from './components/horaires';
import { Information } from './components/information';

export const Home=()=>{
  return (
    <div className="home">
      <Navbar/>
      <HeadScreen/>
      <Paroisse/>
      <Horaires/>
      <Information/>
      <Bas/>
    </div>
  );
}


