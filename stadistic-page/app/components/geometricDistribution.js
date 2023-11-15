"use client";
import { useState } from "react";

export default function Geometric() {
  const [probability, setProbability] = useState(0);
  const [median, setMedian] = useState(0);
  const [variance, setVariance] = useState(0);

  const [random, setRandom] = useState(0);
  const [probabilitySuccess, setprobabilitySuccess] = useState(0);

  const functionGeometric = () => {
    let probabilidad = probabilitySuccess * Math.pow(1 - probabilitySuccess, random - 1);
    let media = 1 / probabilitySuccess;
    let varianza = 1 - probabilitySuccess / Math.pow(probabilitySuccess, 2);

    setProbability(probabilidad * 1.0);
    setMedian(media * 1.0);
    setVariance(varianza * 1.0);
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-white text-6xl mb-10">Geometric Distribucion</h1>
      <form
        className="text-white flex flex-col justify-center items-center h-max bg-zinc-900 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-white">Random variable: </label>
        <input
          type="number"
          className="text-black pl-4"
          value={random}
          onChange={(e) => setRandom(e.target.value)}
        />

        <label className="text-white mt-4">probability success: </label>
        <input
          type="number"
          className="text-black pl-4"
          step="any"
          value={probabilitySuccess}
          onChange={(e) => setprobabilitySuccess(e.target.value)}
        />

        <label className="mt-4">Probability: {probability.toFixed(2)}</label>
        <label>Median: {median.toFixed(2)}</label>
        <label>Variance: {variance.toFixed(2)}</label>

        <button
          className="bg-zinc-950 pl-3 pr-3 mt-4"
          onClick={() => functionGeometric()}
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
