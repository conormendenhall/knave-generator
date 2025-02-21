"use client";

import { useState } from "react";
import { Jacquard_24 } from "next/font/google";
const jacquard = Jacquard_24({
  weight: "400",
  display: "swap",
});

export default function Home() {
  const [name, setName] = useState<string | null>(null);
  const [strength, setStrength] = useState<number | null>(null);
  const [dexterity, setDexterity] = useState<number | null>(null);
  const [constitution, setConstitution] = useState<number | null>(null);
  const [intelligence, setIntelligence] = useState<number | null>(null);
  const [wisdom, setWisdom] = useState<number | null>(null);
  const [charisma, setCharisma] = useState<number | null>(null);

  return (
    <div className="min-h-screen items-center p-8 pb-20 sm:p-20">
      <div className="flex flex-row items-center">
        <button
          className={`${jacquard.className} p-2 text-[4rem]`}
          onClick={() => setName(generateName())}
        >
          Who art thou, knave?
        </button>
        <p className="m-4 text-[3rem]">{name}</p>
      </div>
      <div
        id="abilities"
        className="grid grid-flow-row grid-cols-6 items-center gap-2"
      >
        <div className="border-4">
          <p className="m-2">Defense: {strength && strength + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setStrength(rollAbility())}
          >
            Strength
          </button>
          <p className="m-2">Bonus: {strength && `+${strength}`}</p>
        </div>
        <div className="border-4">
          <p className="m-2">Defense: {dexterity && dexterity + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setDexterity(rollAbility())}
          >
            Dexterity
          </button>
          <p className="m-2">Bonus: {dexterity && `+${dexterity}`}</p>
        </div>
        <div className="border-4">
          <p className="m-2">Defense: {constitution && constitution + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setConstitution(rollAbility())}
          >
            Constitution
          </button>
          <p className="m-2">Bonus: {constitution && `+${constitution}`}</p>
        </div>
        <div className="border-4">
          <p className="m-2">Defense: {intelligence && intelligence + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setIntelligence(rollAbility())}
          >
            Intelligence
          </button>
          <p className="m-2">Bonus: {intelligence && `+${intelligence}`}</p>
        </div>
        <div className="border-4">
          <p className="m-2">Defense: {wisdom && wisdom + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setWisdom(rollAbility())}
          >
            Wisdom
          </button>
          <p className="m-2">Bonus: {wisdom && `+${wisdom}`}</p>
        </div>
        <div className="border-4">
          <p className="m-2">Defense: {charisma && charisma + 10}</p>
          <button
            className="w-full p-2"
            onClick={() => setCharisma(rollAbility())}
          >
            Charisma
          </button>
          <p className="m-2">Bonus: {charisma && `+${charisma}`}</p>
        </div>
      </div>
    </div>
  );
}

const names = [
  ["Aglovale", "Agravaine", "Amr", "Andred", "Ambrosius", "Bagdemagus"],
  ["Ban", "Balan", "Balin", "Bedivere", "Bors", "Brangaine"],
  ["Brangaine", "Bruin", "Breunor", "Brutus", "Cador", "Caelia"],
  ["Caradoc", "Catigern", "Cei", "Claudas", "Claudin", "Culhwch"],
  ["Cynric", "Dagonet", "Dinadan", "Durnure", "Ector", "Edern"],
  ["Elyan", "Enide", "Erec", "Escanor", "Evaine", "Gaheris"],
  ["Galahad", "Galehault", "Galeschin", "Gareth", "Geraint", "Gildas"],
  ["Girart", "Griflet", "Gringolet", "Guinevak", "Guiron", "Gwyn"],
  ["Hengest", "Horsa", "Isolde", "Josephus", "Kahedin", "Lamorak"],
  ["Lanval", "Laudine", "Lionel", "Lohengrin", "Loholt", "Loth"],
  ["Lucan", "Lucius", "Lunete", "Mabon", "Madoc", "Maleagant"],
  ["Meliodas", "Modron", "Mordred", "Morgaine", "Morgause", "Morholt"],
  ["Morien", "Morvydd", "Nimue", "Oberon", "Orgeluse", "Owain"],
  ["Palamedes", "Parcenet", "Pellam", "Pelleas", "Pellinore", "Percival"],
  ["Ragnelle", "Rhiannon", "Safir", "Sagramore", "Tor", "Urien"],
  ["Uther", "Vortigern", "Vortimer", "Yvain", "Ywain", "Zephyranthes"],
];

const generateName = (): string => {
  const firstRoll = Math.floor(Math.random() * names.length);
  const secondRoll = Math.floor(Math.random() * names[firstRoll].length);

  return names[firstRoll][secondRoll];
};

const rollAbility = (): number => {
  const sides = 6;
  const numberOfDice = 3;
  let lowest = sides;
  for (let i = 0; i < numberOfDice; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    if (roll < lowest) {
      lowest = roll;
    }
  }
  return lowest;
};
