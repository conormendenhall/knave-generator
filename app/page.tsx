"use client";

import { useState } from "react";
import { Jacquard_24 } from "next/font/google";
import {
  Names,
  Physiques,
  Faces,
  Skins,
  Hairs,
  Clothing,
  Virtues,
  Vices,
  Speech,
  Backgrounds,
  Misfortunes,
  Alignments,
  DungeoneeringGear,
  GeneralGear1,
  GeneralGear2,
} from "./tables";

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
  const [helmetsAndShield, setHelmetsAndShield] = useState<string | null>(null);
  const [dungeoneeringGear, setDungeoneeringGear] = useState<string | null>(
    null,
  );
  const [generalGear1, setGeneralGear1] = useState<string | null>(null);
  const [generalGear2, setGeneralGear2] = useState<string | null>(null);

  return (
    <div className="min-h-screen items-center p-[5rem]">
      <div className="grid-col grid grid-cols-6 items-center gap-2">
        <button
          id="nameButton"
          className={`${jacquard.className} col-span-3 p-2 text-left text-[4rem]`}
          onClick={() => {
            setName(generateName());
            setStrength(lowestOf3d6());
            setDexterity(lowestOf3d6());
            setConstitution(lowestOf3d6());
            setIntelligence(lowestOf3d6());
            setWisdom(lowestOf3d6());
            setCharisma(lowestOf3d6());
            const hpRoll = rollDie(8);
            setMaxHitPoints(hpRoll);
            setHitPoints(hpRoll);
            setPhysique(rollPhysique());
            setFace(rollFace());
            setSkin(rollSkin());
            setHair(rollHair());
            setClothing(rollClothing());
            setVirtue(rollVirtue());
            setVice(rollVice());
            setSpeech(rollSpeech());
            setBackground(rollBackground());
            setMisfortunes(rollMisfortunes());
            setAlignment(rollAlignment());
            setArmor(rollArmor());
            setHelmetsAndShield(rollHelmetAndShield());
            setDungeoneeringGear(rollDungeoneeringGear());
            setGeneralGear1(rollGeneralGear1());
            setGeneralGear2(rollGeneralGear2());
          }}
        >
          Who art thou, knave?
        </button>
        <p className="col-span-2 m-4 text-[3rem]">{name}</p>
        <div className="color-mid grid grid-cols-3 self-start">
          <button
            onClick={() => {
              const roll = rollDie(8);
              setMaxHitPoints(roll);
              setHitPoints(roll);
            }}
            className="col-span-3"
          >
            Hit Points
          </button>
          <button
            onClick={() =>
              hitPoints !== null && setHitPoints(Math.max(hitPoints - 1, 0))
            }
            className="p-2"
          >
            &#9660;
          </button>
          <p className="m-2 text-center">
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
      <section className="grid grid-cols-2 gap-2">
        <section>
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
            <button
              onClick={() => setFace(rollFace())}
              className="w-1/2 text-left"
            >
              Face
            </button>
            <p className="grow px-4 py-2">{face}</p>
          </div>
          <div className="color-mid flex">
            <button
              onClick={() => setSkin(rollSkin())}
              className="w-1/2 text-left"
            >
              Skin
            </button>
            <p className="grow px-4 py-2">{skin}</p>
          </div>
          <div className="color-mid flex">
            <button
              onClick={() => setHair(rollHair())}
              className="w-1/2 text-left"
            >
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
            <button
              onClick={() => setVice(rollVice())}
              className="w-1/2 text-left"
            >
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
        </section>
        <section>
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
          <div className="color-mid flex">
            <button
              onClick={() => setHelmetsAndShield(rollHelmetAndShield())}
              className="w-1/2 text-left"
            >
              Helmet and Shield
            </button>
            <p className="grow px-4 py-2">{helmetsAndShield}</p>
          </div>
          <div className="color-mid flex">
            <button
              onClick={() => setDungeoneeringGear(rollDungeoneeringGear())}
              className="w-1/2 text-left"
            >
              Dungeoneering Gear
            </button>
            <p className="grow px-4 py-2">{dungeoneeringGear}</p>
          </div>
          <div className="color-mid flex">
            <button
              onClick={() => setGeneralGear1(rollGeneralGear1())}
              className="w-1/2 text-left"
            >
              General Gear 1
            </button>
            <p className="grow px-4 py-2">{generalGear1}</p>
          </div>
          <div className="color-mid flex">
            <button
              onClick={() => setGeneralGear2(rollGeneralGear2())}
              className="w-1/2 text-left"
            >
              General Gear 2
            </button>
            <p className="grow px-4 py-2">{generalGear2}</p>
          </div>
        </section>
      </section>
    </div>
  );
}

const generateName = (): string => {
  const roll = Math.floor(Math.random() * Names.length);
  return Names[roll];
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

const rollPhysique = (): string => {
  const roll = Math.floor(Math.random() * Physiques.length);
  return Physiques[roll];
};

const rollFace = (): string => {
  const roll = Math.floor(Math.random() * Faces.length);
  return Faces[roll];
};

const rollSkin = (): string => {
  const roll = Math.floor(Math.random() * Skins.length);
  return Skins[roll];
};

const rollHair = (): string => {
  const roll = Math.floor(Math.random() * Hairs.length);
  return Hairs[roll];
};

const rollClothing = (): string => {
  const roll = Math.floor(Math.random() * Clothing.length);
  return Clothing[roll];
};

const rollVirtue = (): string => {
  const roll = Math.floor(Math.random() * Virtues.length);
  return Virtues[roll];
};

const rollVice = (): string => {
  const roll = Math.floor(Math.random() * Vices.length);
  return Vices[roll];
};

const rollSpeech = (): string => {
  const roll = Math.floor(Math.random() * Speech.length);
  return Speech[roll];
};

const rollBackground = (): string => {
  const roll = Math.floor(Math.random() * Backgrounds.length);
  return Backgrounds[roll];
};

const rollMisfortunes = (): string => {
  const roll = Math.floor(Math.random() * Misfortunes.length);
  return Misfortunes[roll];
};

const rollAlignment = (): string => {
  const roll = Math.floor(Math.random() * Alignments.length);
  return Alignments[roll];
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

const rollHelmetAndShield = (): string => {
  const roll = rollDie(20);

  if (roll < 14) {
    return "None";
  } else if (roll < 17) {
    return "Helmet";
  } else if (roll < 20) {
    return "Shield";
  } else {
    return "Helmet and Shield";
  }
};

const rollDungeoneeringGear = (): string => {
  const roll = Math.floor(Math.random() * DungeoneeringGear.length);
  return DungeoneeringGear[roll];
};

const rollGeneralGear1 = (): string => {
  const roll = Math.floor(Math.random() * GeneralGear1.length);
  return GeneralGear1[roll];
};

const rollGeneralGear2 = (): string => {
  const roll = Math.floor(Math.random() * GeneralGear2.length);
  return GeneralGear2[roll];
};
