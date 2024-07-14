import Bas from './bas';
import AddEvent from './AddEvent';
import ListeEmail from './listeEmail';
import Annonce from './annonce';

import { HeadScreen } from '../components/headScreen';
import { Navbar } from '../components/navbar';
import { Paroisse } from '../components/nosParoisse';
import { Horaires } from '../components/horaires';
import { Information } from '../components/information';



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


