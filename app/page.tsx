"use client";

import { useState } from "react";
import { Jacquard_24 } from "next/font/google";
const jacquard = Jacquard_24({
  weight: "400",
  display: "swap",
});

export default function Home() {
  const [name, setName] = useState<string | null>(null);
  // Abilities
  const [strength, setStrength] = useState<number | null>(null);
  const [dexterity, setDexterity] = useState<number | null>(null);
  const [constitution, setConstitution] = useState<number | null>(null);
  const [intelligence, setIntelligence] = useState<number | null>(null);
  const [wisdom, setWisdom] = useState<number | null>(null);
  const [charisma, setCharisma] = useState<number | null>(null);
  const [hitPoints, setHitPoints] = useState<number | null>(null);
  const [maxHitPoints, setMaxHitPoints] = useState<number | null>(null);
  // Traits
  const [physique, setPhysique] = useState<string | null>(null);
  const [face, setFace] = useState<string | null>(null);
  const [skin, setSkin] = useState<string | null>(null);
  const [hair, setHair] = useState<string | null>(null);
  const [clothing, setClothing] = useState<string | null>(null);
  const [virtue, setVirtue] = useState<string | null>(null);
  const [vice, setVice] = useState<string | null>(null);
  const [speech, setSpeech] = useState<string | null>(null);
  const [background, setBackground] = useState<string | null>(null);
  const [misfortunes, setMisfortunes] = useState<string | null>(null);
  const [alignment, setAlignment] = useState<string | null>(null);

  // Starting Gear
  const [armor, setArmor] = useState<string | null>(null);
  const [helmetsAndShields, setHelmetsAndShields] = useState<string | null>(
    null,
  );
  const [dungeoneeringGear, setDungeoneeringGear] = useState<string | null>(
    null,
  );
  const [generalGear1, setGeneralGear1] = useState<string | null>(null);
  const [generalGear2, setGeneralGear2] = useState<string | null>(null);

  return (
    <div className="min-h-screen items-center p-8 pb-20 sm:p-20">
      <div className="flex flex-row items-center">
        <button
          id="nameButton"
          className={`${jacquard.className} w-1/2 p-2 text-left text-[4rem]`}
          onClick={() => setName(generateName())}
        >
          Who art thou, knave?
        </button>
        <p className="m-4 text-[3rem]">{name}</p>
        <div className="ml-auto">
          <button
            onClick={() => {
              const roll = rollDie(8);
              setMaxHitPoints(roll);
              setHitPoints(roll);
            }}
          >
            Hit Points
          </button>
          <div className="flex">
            <button
              onClick={() =>
                hitPoints !== null && setHitPoints(Math.max(hitPoints - 1, 0))
              }
              className="p-2"
            >
              &#9660;
            </button>
            <p className="m-2 grow text-center">
              {maxHitPoints && `${hitPoints}/${maxHitPoints}`}
            </p>
            <button
              onClick={() =>
                hitPoints !== null &&
                maxHitPoints !== null &&
                setHitPoints(Math.min(hitPoints + 1, maxHitPoints))
              }
              className="p-2"
            >
              &#9650;
            </button>
          </div>
        </div>
      </div>
      <div
        id="abilities"
        className="grid grid-flow-row grid-cols-6 items-center gap-2"
      >
        <div>
          <p className="m-2">Defense: {strength && strength + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setStrength(lowestOf3d6())}
          >
            Strength
          </button>
          <p className="m-2">Bonus: {strength && `+${strength}`}</p>
        </div>
        <div>
          <p className="m-2">Defense: {dexterity && dexterity + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setDexterity(lowestOf3d6())}
          >
            Dexterity
          </button>
          <p className="m-2">Bonus: {dexterity && `+${dexterity}`}</p>
        </div>
        <div>
          <p className="m-2">Defense: {constitution && constitution + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setConstitution(lowestOf3d6())}
          >
            Constitution
          </button>
          <p className="m-2">Bonus: {constitution && `+${constitution}`}</p>
        </div>
        <div>
          <p className="m-2">Defense: {intelligence && intelligence + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setIntelligence(lowestOf3d6())}
          >
            Intelligence
          </button>
          <p className="m-2">Bonus: {intelligence && `+${intelligence}`}</p>
        </div>
        <div>
          <p className="m-2">Defense: {wisdom && wisdom + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setWisdom(lowestOf3d6())}
          >
            Wisdom
          </button>
          <p className="m-2">Bonus: {wisdom && `+${wisdom}`}</p>
        </div>
        <div>
          <p className="m-2">Defense: {charisma && charisma + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setCharisma(lowestOf3d6())}
          >
            Charisma
          </button>
          <p className="m-2">Bonus: {charisma && `+${charisma}`}</p>
        </div>
      </div>
      <h2>Traits</h2>
      <div className="color-mid flex">
        <button
          onClick={() => setPhysique(rollPhysique())}
          className="w-1/2 text-left"
        >
          Physique
        </button>
        <p className="px-4 py-2">{physique}</p>
      </div>
      <div className="color-mid flex">
        <button onClick={() => setFace(rollFace())} className="w-1/2 text-left">
          Face
        </button>
        <p className="grow px-4 py-2">{face}</p>
      </div>
      <div className="color-mid flex">
        <button onClick={() => setSkin(rollSkin())} className="w-1/2 text-left">
          Skin
        </button>
        <p className="grow px-4 py-2">{skin}</p>
      </div>
      <div className="color-mid flex">
        <button onClick={() => setHair(rollHair())} className="w-1/2 text-left">
          Hair
        </button>
        <p className="grow px-4 py-2">{hair}</p>
      </div>
      <div className="color-mid flex">
        <button
          onClick={() => setClothing(rollClothing())}
          className="w-1/2 text-left"
        >
          Clothing
        </button>
        <p className="grow px-4 py-2">{clothing}</p>
      </div>
      <div className="color-mid flex">
        <button
          onClick={() => setVirtue(rollVirtue())}
          className="w-1/2 text-left"
        >
          Virtue
        </button>
        <p className="grow px-4 py-2">{virtue}</p>
      </div>
      <div className="color-mid flex">
        <button onClick={() => setVice(rollVice())} className="w-1/2 text-left">
          Vice
        </button>
        <p className="grow px-4 py-2">{vice}</p>
      </div>
      <div className="color-mid flex">
        <button
          onClick={() => setSpeech(rollSpeech())}
          className="w-1/2 text-left"
        >
          Speech
        </button>
        <p className="grow px-4 py-2">{speech}</p>
      </div>
      <div className="color-mid flex">
        <button
          onClick={() => setBackground(rollBackground())}
          className="w-1/2 text-left"
        >
          Background
        </button>
        <p className="grow px-4 py-2">{background}</p>
      </div>
      <div className="color-mid flex">
        <button
          onClick={() => setMisfortunes(rollMisfortunes())}
          className="w-1/2 text-left"
        >
          Misfortunes
        </button>
        <p className="grow px-4 py-2">{misfortunes}</p>
      </div>
      <div className="color-mid flex">
        <button
          onClick={() => setAlignment(rollAlignment())}
          className="w-1/2 text-left"
        >
          Alignment
        </button>
        <p className="grow px-4 py-2">{alignment}</p>
      </div>
      <h2>Starting Gear</h2>
      <div className="color-mid flex">
        <button
          onClick={() => setArmor(rollArmor())}
          className="w-1/2 text-left"
        >
          Armor
        </button>
        <p className="grow px-4 py-2">{armor}</p>
      </div>
    </div>
  );
}

const names = [
  "Aglovale",
  "Agravaine",
  "Amr",
  "Andred",
  "Ambrosius",
  "Bagdemagus",
  "Ban",
  "Balan",
  "Balin",
  "Bedivere",
  "Bors",
  "Brangaine",
  "Brangaine",
  "Bruin",
  "Breunor",
  "Brutus",
  "Cador",
  "Caelia",
  "Caradoc",
  "Catigern",
  "Cei",
  "Claudas",
  "Claudin",
  "Culhwch",
  "Cynric",
  "Dagonet",
  "Dinadan",
  "Durnure",
  "Ector",
  "Edern",
  "Elyan",
  "Enide",
  "Erec",
  "Escanor",
  "Evaine",
  "Gaheris",
  "Galahad",
  "Galehault",
  "Galeschin",
  "Gareth",
  "Geraint",
  "Gildas",
  "Girart",
  "Griflet",
  "Gringolet",
  "Guinevak",
  "Guiron",
  "Gwyn",
  "Hengest",
  "Horsa",
  "Isolde",
  "Josephus",
  "Kahedin",
  "Lamorak",
  "Lanval",
  "Laudine",
  "Lionel",
  "Lohengrin",
  "Loholt",
  "Loth",
  "Lucan",
  "Lucius",
  "Lunete",
  "Mabon",
  "Madoc",
  "Maleagant",
  "Meliodas",
  "Modron",
  "Mordred",
  "Morgaine",
  "Morgause",
  "Morholt",
  "Morien",
  "Morvydd",
  "Nimue",
  "Oberon",
  "Orgeluse",
  "Owain",
  "Palamedes",
  "Parcenet",
  "Pellam",
  "Pelleas",
  "Pellinore",
  "Percival",
  "Ragnelle",
  "Rhiannon",
  "Safir",
  "Sagramore",
  "Tor",
  "Urien",
  "Uther",
  "Vortigern",
  "Vortimer",
  "Yvain",
  "Ywain",
  "Zephyranthes",
];

const generateName = (): string => {
  const roll = Math.floor(Math.random() * names.length);
  return names[roll];
};

const rollDie = (sides: number): number => {
  return Math.floor(Math.random() * sides) + 1;
};

const lowestOf3d6 = (): number => {
  const sides = 6;
  const numberOfDice = 3;
  let lowest = sides;

  for (let i = 0; i < numberOfDice; i++) {
    const roll = rollDie(sides);
    if (roll < lowest) {
      lowest = roll;
    }
  }
  return lowest;
};

const physiques = [
  "Athletic",
  "Brawny",
  "Corpulent",
  "Delicate",
  "Gaunt",
  "Hulking",
  "Lanky",
  "Ripped",
  "Rugged",
  "Scrawny",
  "Short",
  "Sinewy",
  "Slender",
  "Flabby",
  "Statuesque",
  "Stout",
  "Tiny",
  "Towering",
  "Willowy",
  "Wiry",
];

const rollPhysique = (): string => {
  const roll = Math.floor(Math.random() * physiques.length);
  return physiques[roll];
};

const faces = [
  "Bloated",
  "Blunt",
  "Bony",
  "Chiseled",
  "Delicate",
  "Elognated",
  "Patrician",
  "Pinched",
  "Hawkish",
  "Broken",
  "Impish",
  "Narrow",
  "Ratlike",
  "Round",
  "Sunken",
  "Sharp",
  "Soft",
  "Square",
  "Wide",
  "Wolfish",
];

const rollFace = (): string => {
  const roll = Math.floor(Math.random() * faces.length);
  return faces[roll];
};

const skins = [
  "Battle Scar",
  "Birthmark",
  "Burn Scar",
  "Dark",
  "Makeup",
  "Oily",
  "Pale",
  "Perfect",
  "Pierced",
  "Pockmarked",
  "Reeking",
  "Tattooed",
  "Rosy",
  "Rough",
  "Sallow",
  "Sunburned",
  "Tanned",
  "War Paint",
  "Weathered",
  "Whip Scar",
];

const rollSkin = (): string => {
  const roll = Math.floor(Math.random() * skins.length);
  return skins[roll];
};

const hairs = [
  "Bald",
  "Birthmark",
  "Bristly",
  "Cropped",
  "Curly",
  "Disheveled",
  "Dreadlocks",
  "Filthy",
  "Frizzy",
  "Greased",
  "Limp",
  "Long",
  "Luxurious",
  "Mohawk",
  "Oily",
  "Ponytail",
  "Silky",
  "Topknot",
  "Wavy",
  "Wispy",
];

const rollHair = (): string => {
  const roll = Math.floor(Math.random() * hairs.length);
  return hairs[roll];
};

const clothing = [
  "Antique",
  "Bloody",
  "Ceremonial",
  "Decorated",
  "Eccentric",
  "Elegant",
  "Fashionable",
  "Filthy",
  "Flamboyant",
  "Stained",
  "Foreign",
  "Frayed",
  "Frumpy",
  "Livery",
  "Oversized",
  "Patched",
  "Perfumed",
  "Rancid",
  "Torn",
  "Undersized",
];

const rollClothing = (): string => {
  const roll = Math.floor(Math.random() * clothing.length);
  return clothing[roll];
};

const virtues = [
  "Ambitious",
  "Cautious",
  "Courageous",
  "Courteous",
  "Curious",
  "Disciplined",
  "Focused",
  "Generous",
  "Gregarious",
  "Honest",
  "Honorable",
  "Humble",
  "Idealistic",
  "Just",
  "Loyal",
  "Merciful",
  "Righteous",
  "Serene",
  "Stoic",
  "Tolerant",
];

const rollVirtue = (): string => {
  const roll = Math.floor(Math.random() * virtues.length);
  return virtues[roll];
};

const vices = [
  "Aggressive",
  "Arrogant",
  "Bitter",
  "Cowardly",
  "Cruel",
  "Deceitful",
  "Flippant",
  "Gluttonous",
  "Greedy",
  "Irascible",
  "Lazy",
  "Nervous",
  "Prejudiced",
  "Reckless",
  "Rude",
  "Suspicious",
  "Vain",
  "Vengeful",
  "Wasteful",
  "Whiny",
];

const rollVice = (): string => {
  const roll = Math.floor(Math.random() * vices.length);
  return vices[roll];
};

const speeches = [
  "Blunt",
  "Booming",
  "Breathy",
  "Cryptic",
  "Drawling",
  "Droning",
  "Flowery",
  "Formal",
  "Gravelly",
  "Hoarse",
  "Mumbling",
  "Precise",
  "Quaint",
  "Rambling",
  "Rapid-fire",
  "Dialect",
  "Slow",
  "Squeaky",
  "Stuttering",
  "Whispery",
];

const rollSpeech = (): string => {
  const roll = Math.floor(Math.random() * speeches.length);
  return speeches[roll];
};

const backgrounds = [
  "Alchemist",
  "Beggar",
  "Butcher",
  "Burglar",
  "Charlatan",
  "Cleric",
  "Cook",
  "Cultist",
  "Gambler",
  "Herbalist",
  "Magician",
  "Mariner",
  "Mercenary",
  "Merchant",
  "Outlaw",
  "Performer",
  "Pickpocket",
  "Smuggler",
  "Student",
  "Tracker",
];

const rollBackground = (): string => {
  const roll = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[roll];
};

const misfortunes = [
  "Abandoned",
  "Addicted",
  "Blackmailed",
  "Condemned",
  "Cursed",
  "Defrauded",
  "Demoted",
  "Discredited",
  "Disowned",
  "Exiled",
  "Framed",
  "Haunted",
  "Kidnapped",
  "Mutilated",
  "Poor",
  "Pursued",
  "Rejected",
  "Replaced",
  "Robbed",
  "Suspected",
];

const rollMisfortunes = (): string => {
  const roll = Math.floor(Math.random() * misfortunes.length);
  return misfortunes[roll];
};

const alignments = [
  "Law",
  "Neutrality",
  "Chaos",
];

const rollAlignment = (): string => {
  const roll = Math.floor(Math.random() * alignments.length);
  return alignments[roll];
};

const rollArmor = (): string => {
  const roll = rollDie(20);

  if (roll < 4) {
    return "No armor";
  } else if (roll < 15) {
    return "Gambeson";
  } else if (roll < 20) {
    return "Brigandine";
  } else {
    return "Chain";
  }
};
