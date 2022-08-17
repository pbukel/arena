import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import Toolbar from "./components/Toolbar";
import ShopPage from "./pages/ShopPage";
import ArenaPage from "./pages/ArenaPage";
import MainPage from "./pages/MainPage";

import mainContext from "./context/mainContext";

function App() {
  const monsters = [
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
      name: "Basilisk",
      maxDamage: 5,
      health: 100,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
      name: "Bat",
      maxDamage: 8,
      health: 80,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
      name: "Bear",
      maxDamage: 20,
      health: 150,
      maxItemsDrop: 3,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
      name: "Beetle",
      maxDamage: 3,
      health: 300,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
      name: "Boar",
      maxDamage: 7,
      health: 85,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
      name: "Carrion bird",
      maxDamage: 6,
      health: 170,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
      name: "Chimaera",
      maxDamage: 12,
      health: 190,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
      name: "Clefthoof",
      maxDamage: 50,
      health: 500,
      maxItemsDrop: 4,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
      name: "Crab",
      maxDamage: 8,
      health: 120,
      maxItemsDrop: 3,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
      name: "Crocolisk",
      maxDamage: 38,
      health: 420,
      maxItemsDrop: 3,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
      name: "Devilsaur",
      maxDamage: 25,
      health: 250,
      maxItemsDrop: 3,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
      name: "Diemetradon",
      maxDamage: 12,
      health: 90,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
      name: "Dragonhawk",
      maxDamage: 120,
      health: 20,
      maxItemsDrop: 5,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
      name: "Elekk",
      maxDamage: 34,
      health: 160,
      maxItemsDrop: 4,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
      name: "Fox",
      maxDamage: 5,
      health: 50,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
      name: "Gryphon",
      maxDamage: 18,
      health: 350,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
      name: "Gorilla",
      maxDamage: 30,
      health: 240,
      maxItemsDrop: 3,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
      name: "Horse",
      maxDamage: 3,
      health: 150,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
      name: "Hydra",
      maxDamage: 40,
      health: 500,
      maxItemsDrop: 5,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
      name: "Hyena",
      maxDamage: 9,
      health: 120,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
      name: "Lion",
      maxDamage: 13,
      health: 200,
      maxItemsDrop: 2,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
      name: "Lynx",
      maxDamage: 12,
      health: 150,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
      name: "Mastiff",
      maxDamage: 7,
      health: 80,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
      name: "Monkey",
      maxDamage: 4,
      health: 300,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
      name: "Nether ray",
      maxDamage: 6,
      health: 120,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
      name: "Owl",
      maxDamage: 7,
      health: 70,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
      name: "Panther",
      maxDamage: 19,
      health: 40,
      maxItemsDrop: 3,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
      name: "Parrot",
      maxDamage: 2,
      health: 30,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
      name: "Raven",
      maxDamage: 8,
      health: 150,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
      name: "Rhinoceros",
      maxDamage: 120,
      health: 1500,
      maxItemsDrop: 8,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
      name: "Scorpid",
      maxDamage: 25,
      health: 300,
      maxItemsDrop: 3,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
      name: "Sea snake",
      maxDamage: 5,
      health: 50,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
      name: "Serpent",
      maxDamage: 12,
      health: 80,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
      name: "Shark",
      maxDamage: 15,
      health: 210,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
      name: "Spore bat",
      maxDamage: 9,
      health: 150,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
      name: "Stag",
      maxDamage: 4,
      health: 200,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
      name: "Tallstrider",
      maxDamage: 20,
      health: 80,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
      name: "Threshadon",
      maxDamage: 70,
      health: 800,
      maxItemsDrop: 3,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
      name: "Turtle",
      maxDamage: 5,
      health: 5000,
      maxItemsDrop: 10,
    },
  ];
  const [character, setCharacter] = useState(null);
  const [getSelection, setSelection] = useState(true);
  const [getInventor, setInventor] = useState([]);
  const [getGold, setGold] = useState();
  const [fightItem, setFightItem] = useState();
  const [userhp, setUserHp] = useState(100);
  const [monsterhp, setMonsterHp] = useState(100);
  const [monster, setMonster] = useState();

  useEffect(() => {
    let monst = monsters[Math.floor(Math.random() * monsters.length)];
    setMonster(monst);
  }, []);

  return (
    <mainContext.Provider
      value={{
        character,
        setCharacter,
        getSelection,
        setSelection,
        getInventor,
        setInventor,
        getGold,
        setGold,
        fightItem,
        setFightItem,
        userhp,
        setUserHp,
        monsterhp,
        setMonsterHp,
        monster,
        setMonster,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <div>{character && <Toolbar />}</div>
          <div className="routes">
            <Routes>
              <Route path="/" element={<CharacterPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/arena" element={<ArenaPage />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </mainContext.Provider>
  );
}

export default App;
