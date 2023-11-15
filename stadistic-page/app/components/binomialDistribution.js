"use client";
import { useState } from "react";

export default function Binomial() {
  const [probability, setProbability] = useState(0);
  const [experiment, setExperiment] = useState(0);
  const [median, setMedian] = useState(0);
  const [variance, setVariance] = useState(0);
  const [success, setSuccess] = useState(0);
  const [numberSucces, setNumberSucces] = useState(0);

  const fact = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fact(num - 1);
    }
  };

  const functionBinomial = () => {
    let probabilidad =
      (fact(experiment) /
        (fact(numberSucces) * fact(experiment - numberSucces))) *
      Math.pow(success, numberSucces) *
      Math.pow(1 - success, experiment - numberSucces);
    let media = experiment * success;
    let varianza = experiment * success * (1 - success);
    setProbability(probabilidad * 1.0);
    setMedian(media * 1.0);
    setVariance(varianza * 1.0);
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-white text-6xl mb-10">Binomial Distribucion</h1>
      <form
        className="text-white flex flex-col justify-center items-center h-max bg-zinc-900 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-white">
          Number of independent experiments:{" "}
        </label>
        <input
          type="number"
          className="text-black pl-4"
          value={experiment}
          onChange={(e) => setExperiment(e.target.value)}
        />

        <label className="text-white mt-4">Probability of success: </label>
        <input
          type="number"
          className="text-black pl-4"
          step="any"
          value={success}
          onChange={(e) => setSuccess(e.target.value)}
        />

        <label className="text-white mt-4">Number of successes: </label>
        <input
          type="number"
          className="text-black pl-4"
          value={numberSucces}
          onChange={(e) => setNumberSucces(e.target.value)}
        />

        <label className="mt-4">Probability: {probability.toFixed(2)}</label>
        <label>Median: {median.toFixed(2)}</label>
        <label>Variance: {variance.toFixed(2)}</label>

        <button
          className="bg-zinc-950 pl-3 pr-3 mt-4"
          onClick={() => functionBinomial()}
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
