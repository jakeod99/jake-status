import React from 'react';
import './App.css';
import Bamboozled from './vibe-gifs/bamboozled.gif';                   // 7-10
import BeanField from './vibe-gifs/bean-field.gif';                    // 0-2
import BulldogMotorcycle from './vibe-gifs/bulldog-motorcycle.gif';    // 3-4
import BulldogSleepy from './vibe-gifs/bulldog-sleepy.gif';            // 0-2
import BulldogSnacking from './vibe-gifs/bulldog-snacking.gif';        // 0-2
import BulldogStretch from './vibe-gifs/bulldog-stretch.gif';          // 0-2
import BulldogSwing from './vibe-gifs/bulldog-swing.gif';              // 0-2
import BulldogTrampoline from './vibe-gifs/bulldog-trampoline.gif';    // 0-2
import BulldogTreadmill from './vibe-gifs/bulldog-treadmill.gif';      // 5-6
import BunnySleep from './vibe-gifs/bunny-sleep.gif';                  // 0-2
import CookieMonsterWait from './vibe-gifs/cookie-monster-wait.gif';   // 0-2
import CostanzaSerenity from './vibe-gifs/costanza-serenity.gif';      // 5-6
import DaffyNervous from './vibe-gifs/daffy-nervous.gif';              // 3-4
import DogHammock from './vibe-gifs/dog-hammock.gif';                  // 0-2
import DogHomework from './vibe-gifs/dog-homework.gif';                // 3-4
import DogOutOfBed from './vibe-gifs/dog-out-of-bed.gif';              // 0-2
import DogPjs from './vibe-gifs/dog-pjs.gif';                          // 0-2
import DogReading from './vibe-gifs/dog-reading.gif';                  // 3-4
import DogShockGround from './vibe-gifs/dog-shock-ground.gif';         // 5-6
import DogTreadmill from './vibe-gifs/dog-treadmill.gif';              // 3-4
import DogTyping from './vibe-gifs/dog-typing.gif';                    // 3-4
import DrinkScience from './vibe-gifs/drink-science.gif';              // 3-4
import EeyoreBored from './vibe-gifs/eeyore-bored.gif';                // 3-4
import EeyoreThankful from './vibe-gifs/eeyore-thankful.gif';          // 3-4
import FireTyping from './vibe-gifs/fire-typing.gif';                  // 7-10
import GumpDumb from './vibe-gifs/gump-dumb.gif';                      // undef
import HomerElectricution from './vibe-gifs/homer-electricution.gif';  // 3-4
import HomerMonkey from './vibe-gifs/homer-monkey.gif';                // 3-4
import HomerScream from './vibe-gifs/homer-scream.gif';                // 7-10
import HomerWorkMoney from './vibe-gifs/homer-work-money.gif';         // 5-6
import HomerWork from './vibe-gifs/homer-work.gif';                    // 3-4
import HuskyEatFloor from './vibe-gifs/husky-eat-floor.gif';           // 0-2
import KermitFrantic from './vibe-gifs/kermit-frantic.gif';            // 7-10
import KermitNervous from './vibe-gifs/kermit-nervous.gif';            // 5-6
import KermitType from './vibe-gifs/kermit-type.gif';                  // 5-6
import KorgiTv from './vibe-gifs/korgi-tv.gif';                        // 0-2
import KorgiTyping from './vibe-gifs/korgi-typing.gif';                // 5-6
import KramerChicken from './vibe-gifs/kramer-chicken.gif';            // 0-2
import KramerShock from './vibe-gifs/kramer-shock.gif';                // 7-10
import KramerTooMuch from './vibe-gifs/kramer-too-much.gif';           // 7-10
import LazyDogPool from './vibe-gifs/lazy-dog-pool.gif';               // 0-2
import LazyRaccoon from './vibe-gifs/lazy-raccoon.gif';                // 0-2 
import MichaelScottCringe from './vibe-gifs/michael-scott-cringe.gif'; // 5-6
import OfficeSpaceApathy from './vibe-gifs/office-space-apathy.gif';   // 3-4
import OfficeSpaceBobs from './vibe-gifs/office-space-bobs.gif';       // 0-2
import PatrickNothing from './vibe-gifs/patrick-nothing.gif';          // 0-2
import PenguinWork from './vibe-gifs/penguin-work.gif';                // 3-4
import PoohSleep from './vibe-gifs/pooh-sleep.gif';                    // 0-2
import PoohThinking from './vibe-gifs/pooh-thinking.gif';              // 3-4
import PugShock from './vibe-gifs/pug-shock.gif';                      // 5-6
import PushFetch from './vibe-gifs/push-fetch.gif';                    // 0-2
import ShibaInuWorking from './vibe-gifs/shiba-inu-working.gif';       // 3-4
import ShockedDog from './vibe-gifs/shocked-dog.gif';                  // 5-6
import SlothCarrots from './vibe-gifs/sloth-carrots.gif';              // 0-2
import SpongebobCleaning from './vibe-gifs/spongebob-cleaning.gif';    // 7-10
import SpongebobCoffee from './vibe-gifs/spongebob-coffee.gif';        // 0-2
import SpongebobReading from './vibe-gifs/spongebob-reading.gif';      // 3-4
import SylvesterCoffee from './vibe-gifs/sylvester-coffee.gif';        // 7-10
import ThreeLaptops from './vibe-gifs/three-laptops.gif';              // 7-10
import UprightDogShock from './vibe-gifs/upright-dog-shock.gif';       // 5-6
import WeinerDog from './vibe-gifs/weiner-dog.gif';                    // 3-4

class Vibe extends React.Component {

    constructor(props) {
        super(props);
    }

    getVibe(stress) {
        if (typeof stress === "undefined" || stress == -1) {
            return GumpDumb;
        } else if (stress <= 2) {
            const noStressGifs = [BeanField, BulldogSleepy, BulldogSnacking, BulldogStretch, BulldogSwing, BulldogTrampoline, BunnySleep, CookieMonsterWait, DogHammock, DogOutOfBed, DogPjs, HuskyEatFloor, KorgiTv, KramerChicken, LazyDogPool, LazyRaccoon, OfficeSpaceBobs, PatrickNothing, PoohSleep, PushFetch, SlothCarrots, SpongebobCoffee];
            return noStressGifs[Math.floor(Math.random() * noStressGifs.length)];
        } else if (stress <= 4) {
            const lowStressGifs = [BulldogMotorcycle, DaffyNervous, DogHomework, DogReading, DogTreadmill, DogTyping, DrinkScience, EeyoreBored, EeyoreThankful, HomerElectricution, HomerMonkey, HomerWork, OfficeSpaceApathy, PenguinWork, PoohThinking, ShibaInuWorking, SpongebobReading, WeinerDog];
            return lowStressGifs[Math.floor(Math.random() * lowStressGifs.length)];
        } else if (stress <= 6) {
            const midStressGifs = [BulldogTreadmill, CostanzaSerenity, DogShockGround, HomerWorkMoney, KermitNervous, KermitType, KorgiTyping, MichaelScottCringe, PugShock, ShockedDog, UprightDogShock];
            return midStressGifs[Math.floor(Math.random() * midStressGifs.length)];
        } else {
            const highStressGifs = [Bamboozled, FireTyping, HomerScream, KermitFrantic, KramerShock, KramerTooMuch, SpongebobCleaning, SylvesterCoffee, ThreeLaptops];
            return highStressGifs[Math.floor(Math.random() * highStressGifs.length)];
        }
    }

    render() {
        return (
            <div class="detail-container-large">
                <div class="detail-title-container">
                    <h3 class="detail-title">Vibe</h3>
                    <div class="detail-content-container-large">
                        <img src={this.getVibe(this.props.stress)} alt="vibe"></img>
                    </div>
                </div>
            </div>
        );
    }

}

export default Vibe;