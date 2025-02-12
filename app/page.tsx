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
      <div>
        <h1 className={`${jacquard.className}`}>Who art thou, knave?</h1>
        <p className="p-2">{name}</p>
        <button onClick={() => setName(generateName())} className="p-2">
          Name
        </button>
      </div>
      <div
        id="abilities"
        className="grid-col-6 grid-row-3 grid items-center gap-4"
      >
        <p className="col-start-1 row-start-1">Defense: {strength + 10}</p>
        <button
          onClick={() => setStrength(rollAbility())}
          className="col-start-1 row-start-2 p-2"
        >
          Strength
        </button>
        <p className="col-start-1 row-start-3">Bonus: +{strength}</p>
        <p className="col-start-2 row-start-1">Defense: {dexterity + 10}</p>
        <button
          onClick={() => setDexterity(rollAbility())}
          className="col-start-2 row-start-2 p-2"
        >
          Dexterity
        </button>
        <p className="col-start-2 row-start-3">Bonus: +{dexterity}</p>
        <p className="col-start-3 row-start-1">Defense: {constitution + 10}</p>
        <button
          onClick={() => setConstitution(rollAbility())}
          className="col-start-3 row-start-2 p-2"
        >
          Constitution
        </button>
        <p className="col-start-3 row-start-3">Bonus: +{constitution}</p>
        <p className="col-start-4 row-start-1">Defense: {intelligence + 10}</p>
        <button
          onClick={() => setIntelligence(rollAbility())}
          className="col-start-4 row-start-2 p-2"
        >
          Intelligence
        </button>
        <p className="col-start-4 row-start-3">Bonus: +{intelligence}</p>
        <p className="col-start-5 row-start-1">Defense: {wisdom + 10}</p>
        <button
          onClick={() => setWisdom(rollAbility())}
          className="col-start-5 row-start-2 p-2"
        >
          Wisdom
        </button>
        <p className="col-start-5 row-start-3">Bonus: +{wisdom}</p>
        <p className="col-start-6 row-start-1">Defense: {charisma + 10}</p>
        <button
          onClick={() => setCharisma(rollAbility())}
          className="col-start-6 row-start-2 p-2"
        >
          Charisma
        </button>
        <p className="col-start-6 row-start-3">Bonus: +{charisma}</p>
      </div>
    </div>
  );
}

const names = [
  ["Aerg-Tval", "Agn", "Arvant", "Belsum", "Belum", "Brint", "Börda"],
  ["Eldar", "Felban", "Gotven", "Graft", "Grin", "Grittr", "Haerü", "Hargha"],
  ["Harmug", "Jotna", "Karg", "Karva", "Katla", "Keftar", "Klort", "Kratar"],
  ["Kutz", "Kvetin", "Lygan", "Margar", "Merkari", "Nagl", "Niduk", "Nifehl"],
  ["Prügl", "Qillnach", "Risten", "Svind", "Theras", "Therg", "Torvul", "Törn"],
  ["Urm", "Urvarg", "Vagal", "Vatan", "Von", "Vrakh", "Vresi", "Wemut"],
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
