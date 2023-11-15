"use client";
import { useState } from "react";

export default function Hypergeometric() {
  const [probability, setProbability] = useState(0);
  const [median, setMedian] = useState(0);
  const [variance, setVariance] = useState(0);

  const [population, setPopulation] = useState(0);
  const [successPopulation, setSuccessPopulation] = useState(0);
  const [sample, setSample] = useState(0);
  const [successSample, setSuccessSample] = useState(0);

  const fact = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fact(num - 1);
    }
  };

  function com(n, k) {
    let combinatoria = fact(n) / (fact(k) * fact(n - k));
    return combinatoria;
  }

  const functionHypergeometric = () => {
    let probabilidad =
      (com(successPopulation, successSample) *
        com(population - successPopulation, sample - successSample)) /
      com(population, sample);
    let media = (sample * successPopulation) / population;
    let varianza =
      (sample *
        successPopulation *
        (population - successPopulation) *
        (population - sample)) /
      (population * population * (population - 1));

    setProbability(probabilidad * 1.0);
    setMedian(media * 1.0);
    setVariance(varianza * 1.0);
  };

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-white text-6xl mb-10">Hypergeometric Distribucion</h1>
      <form
        className="text-white flex flex-col justify-center items-center h-max bg-zinc-900 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-white">Number of population: </label>
        <input
          type="number"
          className="text-black pl-4"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
        />

        <label className="text-white mt-4">
          Number of success in the population:{" "}
        </label>
        <input
          type="number"
          className="text-black pl-4"
          step="any"
          value={successPopulation}
          onChange={(e) => setSuccessPopulation(e.target.value)}
        />

        <label className="text-white mt-4">Number of sample: </label>
        <input
          type="number"
          className="text-black pl-4"
          value={sample}
          onChange={(e) => setSample(e.target.value)}
        />

        <label className="text-white mt-4">
          Number of success in the sample:{" "}
        </label>
        <input
          type="number"
          className="text-black pl-4"
          step="any"
          value={successSample}
          onChange={(e) => setSuccessSample(e.target.value)}
        />

        <label className="mt-4">Probability: {probability.toFixed(2)}</label>
        <label>Median: {median.toFixed(2)}</label>
        <label>Variance: {variance.toFixed(2)}</label>

        <button
          className="bg-zinc-950 pl-3 pr-3 mt-4"
          onClick={() => functionHypergeometric()}
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
